import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserData } from "../services/userService";
import { getCardData } from "../services/cardService";

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

  const [cardId, setCardId] = useState(() => {
    return localStorage.getItem("cardId") || null;
  });

  useEffect(() => {
    localStorage.setItem("cardId", cardId);
  }, [cardId]);

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

  const [cardData, setCardData] = useState(() => {
    return localStorage.getItem("cardData") || null;
  });

  useEffect(() => {
    const saveCardData = async () => {
      const cardData = await getCardData();
      localStorage.setItem("cardData", JSON.stringify(cardData));
    };

    saveCardData();
  }, [cardId]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        cardId,
        setIsLoggedIn,
        setUserId,
        setCardId,
        setUserData,
        setCardData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
