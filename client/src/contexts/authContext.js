import React, { createContext, useState, useEffect, useContext } from "react";
import getUserData from "../services/userService";
import getAccountData from "../services/accountService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn ? JSON.parse(loggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || null;
  });

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  const [accountId, setAccountId] = useState(() => {
    return localStorage.getItem("accountId") || null;
  });

  useEffect(() => {
    localStorage.setItem("accountId", accountId);
  }, [accountId]);

  const [userData, setUserData] = useState(() => {
    return localStorage.getItem("userData") || null;
  });

  useEffect(() => {
    const saveUserData = async () => {
      const userData = await getUserData();
      localStorage.setItem("userData", JSON.stringify(userData));
    };

    saveUserData();
  }, [userId]);

  const [accountData, setAccountData] = useState(() => {
    return localStorage.getItem("accountData") || null;
  });

  useEffect(() => {
    const saveAccountData = async () => {
      const userData = await getAccountData();
      localStorage.setItem("accountData", JSON.stringify(userData));
    };

    saveAccountData();
  }, [accountId]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        accountId,
        setIsLoggedIn,
        setUserId,
        setAccountId,
        setUserData,
        setAccountData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
