import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import Section from "../../components/Section/Section";
import { Button } from "../../utils/styles/generalStyles";
import { getUsers, loginUser } from "../../api/users";
import { useState } from "react";

const SignIn = ({ setIsAdmin, setIsLoggedIn }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <Section title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);
            const users = await getUsers(response.access_token);
            const user = users.data.find((user) => user.email === values.email);
            setSuccessMessage({
              error: false,
              message:
                "User " +
                user.first_name +
                " " +
                user.last_name +
                " is logged in successfully",
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 2000);

            localStorage.setItem("jwt_token", response.access_token);

            setIsAdmin(user.is_admin);
            setIsLoggedIn(true);

            resetForm();
          } catch (error) {
            setSuccessMessage({
              error: true,
              message: "User is not logged in successfully",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component="div" name="email" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component="div" name="password" />
            </FormRow>
            <FormRow>
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
