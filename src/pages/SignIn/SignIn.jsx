import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
} from "../../utils/styles/generalStyles";
import Section from "../../components/Section/Section";
import { Button } from "../../utils/styles/generalStyles";

const SignIn = () => {
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              email: values.email,
              password: values.password,
            };
            alert(JSON.stringify(data, null, 2));
            console.log(data);
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
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
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
