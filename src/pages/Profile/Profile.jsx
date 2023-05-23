import React, { useState } from "react";
import Section from "../../components/Section/Section";
import { Button } from "../../utils/styles/generalStyles";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { ProfileContent } from "./ProfileStyle";
import ResetPasswordWidget from "../../components/ResetPasswordWidget/ResetPasswordWidget";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = () => {
    setIsEditing(false);
  };

  const changeEditingState = () => {
    setIsEditing(!isEditing);
  };
  return (
    <Section
      title="Profile"
      secondChildren={
        <Button isOutline onClick={changeEditingState}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      }
    >
      <ProfileContent>
        <ProfileForm editState={isEditing} onFormSubmit={handleFormSubmit} />
        <ResetPasswordWidget
          editState={isEditing}
          onFormSubmit={handleFormSubmit}
        />
      </ProfileContent>
    </Section>
  );
};

export default Profile;
