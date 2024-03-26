import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import TransactionHistory from "../components/TransactionHistory";
import { useAuth } from "../contexts/authContext";
import { handleGoogleLogin } from "../services/googleAuthService";

const Account = () => {
  const { userId, cardId, setIsLoggedIn, setUserId } = useAuth();

  useEffect(() => {
    const loginWithGoogle = async () => {
      try {
        await handleGoogleLogin({ userId, setUserId, setIsLoggedIn });
      } catch (error) {
        console.error("Error logging in with Google:", error);
      }
    };

    loginWithGoogle();
  }, [userId]);

  return (
    <>
      <Dashboard />
      <TransactionHistory />
    </>
  );
};

export default Account;
