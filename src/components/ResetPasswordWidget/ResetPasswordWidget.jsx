import React from "react";
import {
  WidgetWrapper,
  WidgetTitle,
  WidgetContent,
} from "./ResetPasswordWidgetStyle";
import propTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorMessage,
  Field,
  Form,
  FormRow,
} from "../../utils/styles/generalStyles";
import { Button } from "../../utils/styles/generalStyles";

const ResetPasswordWidget = ({ editState, onFormSubmit }) => {
  return (
    <WidgetWrapper>
      <WidgetTitle>Reset password</WidgetTitle>
      {!editState ? (
        <WidgetContent>
          In order to reset the password click on Edit button.
        </WidgetContent>
      ) : (
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            newPasswordRepeat: "",
          }}
          validationSchema={Yup.object({
            oldPassword: Yup.string().required("Old password is required"),
            newPassword: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("New password is required"),
            newPasswordRepeat: Yup.string().test(
              "passwords-match",
              "Passwords must match",
              function (value) {
                return this.parent.newPassword === value;
              }
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("Password is changed!");
              onFormSubmit();
              setSubmitting(false);
            }, 1000);
          }}
        >
          {(formik) => (
            <Form>
              <FormRow>
                <Field
                  type="password"
                  name="oldPassword"
                  placeholder="Old password..."
                />
                <ErrorMessage component="div" name="oldPassword" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="newPassword"
                  placeholder="New password..."
                />
                <ErrorMessage component="div" name="newPassword" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="newPasswordRepeat"
                  placeholder="Repeat new password..."
                />
                <ErrorMessage component="div" name="newPasswordRepeat" />
              </FormRow>
              <FormRow>
                <Button
                  isSecondary
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Update password"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
    </WidgetWrapper>
  );
};

ResetPasswordWidget.propTypes = {
  editState: propTypes.bool,
};

export default ResetPasswordWidget;
