import React from "react";
import {
  WidgetWrapper,
  WidgetTitle,
  WidgetContent,
} from "./ResetPasswordWidgetStyle";
import propTypes from "prop-types";

const ResetPasswordWidget = (editState) => {
  const editingState = editState.editState;

  return (
    <WidgetWrapper>
      <WidgetTitle>Reset password</WidgetTitle>
      {!editingState ? (
        <WidgetContent>
          In order to reset the password click on Edit button.
        </WidgetContent>
      ) : (
        <div>ello</div>
      )}
    </WidgetWrapper>
  );
};

ResetPasswordWidget.propTypes = {
  editState: propTypes.bool,
};

export default ResetPasswordWidget;
