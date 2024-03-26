import React from "react";
import GoogleButton from "react-google-button";
import { handleGoogleAuth } from "../services/googleAuthService";

const GoogleAuthButton = () => {
  const handleClick = () => {
    handleGoogleAuth();
  };

  return <GoogleButton onClick={handleClick} />;
};

export default GoogleAuthButton;
