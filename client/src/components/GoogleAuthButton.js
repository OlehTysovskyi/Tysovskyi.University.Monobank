import React from 'react';
import GoogleButton from 'react-google-button';
import { useAuthentication } from '../services/authService';

// TODO: Turn off while it is "in dev"
const GoogleAuthButton = () => {
    const { handleGoogleLogin, fetchUserProfile } = useAuthentication();

    fetchUserProfile();
    const handleClick = () => {
        handleGoogleLogin();
        fetchUserProfile();
    };

    return <GoogleButton onClick={handleClick} />;
};

export default GoogleAuthButton;
