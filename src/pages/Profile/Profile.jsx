import React, { useState } from "react";
import Section from "../../components/Section/Section";
import { Button } from "../../utils/styles/generalStyles";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { ProfileContent } from "./ProfileStyle";
import ResetPasswordWidget from "../../components/ResetPasswordWidget/ResetPasswordWidget";

const Profile = () => {
  //   let isEditing = false;
  const [isEditing, setIsEditing] = useState(false);

  const changeEditingState = () => {
    setIsEditing(!isEditing);
  };
  console.log("Edit state u profilu", isEditing);
  return (
    <Section
      title="Profile"
      secondChildren={
        <Button isOutline onClick={changeEditingState}>
          Edit
        </Button>
      }
    >
      <ProfileContent>
        <ProfileForm editState={isEditing} />
        <ResetPasswordWidget editState={isEditing} />
      </ProfileContent>
    </Section>
  );
};

export default Profile;
