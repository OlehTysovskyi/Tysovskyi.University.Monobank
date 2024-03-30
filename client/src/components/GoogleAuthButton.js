import React from "react";
import GoogleButton from "react-google-button";
import { useAuthentication } from "../services/authService";

const GoogleAuthButton = () => {
  const { handleGoogleLogin } = useAuthentication();
  const handleClick = () => {
    handleGoogleLogin();
  };

  return <GoogleButton onClick={handleClick} />;
};

export default GoogleAuthButton;
