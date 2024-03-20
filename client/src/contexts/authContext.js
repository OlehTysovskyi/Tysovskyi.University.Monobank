import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn ? JSON.parse(loggedIn) : false;
  });
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || null;
  });
  const [accountId, setAccountId] = useState(() => {
    return localStorage.getItem("accountId") || null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("accountId", accountId);
  }, [accountId]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userId, accountId, setIsLoggedIn, setUserId, setAccountId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
