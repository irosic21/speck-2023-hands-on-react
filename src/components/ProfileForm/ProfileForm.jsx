import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
} from "../../utils/styles/generalStyles";
import propTypes from "prop-types";
import { Button } from "../../utils/styles/generalStyles";
import {
  ProfileFormWrapper,
  ProfileFormLabel,
  ProfileFormContainer,
} from "./ProfileFormStyle";

const ProfileForm = ({ editState, onFormSubmit }) => {
  const [state, setState] = useState({
    firstName: "Ivo",
    lastName: "Rošić",
    email: "irosic20@foi.hr",
    githubUsername: "irosic21",
    zeplinUsername: "irosic21",
    activeFacultyYear: "3",
  });
  let data = {};

  const checkChanges = (values) => {
    if (values.firstName != state.firstName) {
      state.firstName = values.firstName;
      data["first_name"] = values.firstName;
    }
    if (values.lastName != state.lastName) {
      state.lastName = values.lastName;
      data["last_name"] = values.lastName;
    }
    if (values.email != state.email) {
      state.email = values.email;
      data["email"] = values.email;
    }
    if (values.githubUsername != state.githubUsername) {
      state.githubUsername = values.githubUsername;
      data["github_username"] = values.githubUsername;
    }
    if (values.zeplinUsername != state.zeplinUsername) {
      state.zeplinUsername = values.zeplinUsername;
      data["zeplin_username"] = values.zeplinUsername;
    }
    if (values.activeFacultyYear != parseInt(state.activeFacultyYear)) {
      state.activeFacultyYear = values.activeFacultyYear;
      data["zeplin_username"] = values.activeFacultyYear;
    }
  };

  return (
    <ProfileFormWrapper>
      <Formik
        initialValues={{
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          githubUsername: state.githubUsername,
          zeplinUsername: state.zeplinUsername,
          activeFacultyYear: state.activeFacultyYear,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          githubUsername: Yup.string().required("Github username is required"),
          zeplinUsername: Yup.string().required("Zeplin username is required"),
          activeFacultyYear: Yup.string().required("Faculty year is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            checkChanges(values);
            alert(JSON.stringify(data, null, 2));
            onFormSubmit();
            setSubmitting(false);
            data = {};
            // resetForm();
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="email">
                    First name
                  </ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Field type="text" name="firstName" disabled={!editState} />
              <ErrorMessage component="div" name="firstName" />
            </FormRow>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="lastName">
                    Last name
                  </ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Field type="text" name="lastName" disabled={!editState} />
              <ErrorMessage component="div" name="lastName" />
            </FormRow>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="email">Email</ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Field type="email" name="email" disabled={!editState} />
              <ErrorMessage component="div" name="email" />
            </FormRow>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="githubUsername">
                    Github
                  </ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Field type="text" name="githubUsername" disabled={!editState} />
              <ErrorMessage component="div" name="githubUsername" />
            </FormRow>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="zeplinUsername">
                    Zeplin
                  </ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Field type="text" name="zeplinUsername" disabled={!editState} />
              <ErrorMessage component="div" name="zeplinUsername" />
            </FormRow>
            <FormRow>
              {editState && (
                <ProfileFormContainer>
                  <ProfileFormLabel htmlFor="activeFacultyYear">
                    Active faculty year
                  </ProfileFormLabel>
                </ProfileFormContainer>
              )}
              <Select
                id="activeFacultyYear"
                disabled={!editState}
                {...formik.getFieldProps("activeFacultyYear")}
              >
                <Option value="" disabled hidden>
                  Choose an Active faculty year
                </Option>
                <Option value="0">Not a student</Option>
                <Option value="1">1st faculty year</Option>
                <Option value="2">2nd faculty year</Option>
                <Option value="3">3rd faculty year</Option>
                <Option value="4">4th faculty year</Option>
                <Option value="5">5th faculty year</Option>
              </Select>
              <ErrorMessage component="div" name="activeFacultyYear" />
            </FormRow>
            {editState && (
              <FormRow>
                <Button
                  isSecondary
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Update user data"}
                </Button>
              </FormRow>
            )}
          </Form>
        )}
      </Formik>
    </ProfileFormWrapper>
  );
};

ProfileForm.propTypes = {
  editState: propTypes.bool,
};

export default ProfileForm;
