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
import { ProfileFormWrapper } from "./ProfileFormStyle";

const ProfileForm = (editState) => {
  const [state, setState] = useState({
    firstName: "Ivo",
    lastName: "Rošić",
    email: "irosic20@foi.hr",
    githubUsername: "irosic21",
    zeplinUsername: "irosic21",
    activeFacultyYear: "3",
  });
  const editingState = editState.editState;

  console.log("Edit state u profil formi", editState.editState);
  console.log("Edit state u profil formi, moja varijabla", !editingState);

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
            const data = {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              github_username: values.githubUsername,
              zeplin_username: values.zeplinUsername,
              active_faculty_year:
                parseInt(values.activeFacultyYear) === 0
                  ? null
                  : parseInt(values.activeFacultyYear),
              is_admin: false,
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
              <Field type="text" name="firstName" disabled={!editingState} />
              <ErrorMessage component="div" name="firstName" />
            </FormRow>
            <FormRow>
              <Field type="text" name="lastName" disabled={!editingState} />
              <ErrorMessage component="div" name="lastName" />
            </FormRow>
            <FormRow>
              <Field type="email" name="email" disabled={!editingState} />
              <ErrorMessage component="div" name="email" />
            </FormRow>
            <FormRow>
              <Field
                type="text"
                name="githubUsername"
                disabled={!editingState}
              />
              <ErrorMessage component="div" name="githubUsername" />
            </FormRow>
            <FormRow>
              <Field
                type="text"
                name="zeplinUsername"
                disabled={!editingState}
              />
              <ErrorMessage component="div" name="zeplinUsername" />
            </FormRow>
            <FormRow>
              <Select
                id="activeFacultyYear"
                disabled={!editingState}
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
            {editingState && (
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
