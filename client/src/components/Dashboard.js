import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { NavLink } from "react-router-dom";

const Dashboard = ({ userId, accountId }) => {
  const { setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`/api/users/${userId}`);
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        setUsername(userData.username);

        const accountResponse = await fetch(
          `/api/get-account-balance/${accountId}`
        );
        if (!accountResponse.ok) {
          throw new Error("Failed to fetch account data");
        }
        const accountData = await accountResponse.json();
        console.log(accountData);
        setBalance(accountData.balance);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [userId, accountId]);

  return (
    <div className="dashboard">
      <NavLink key="" to="/choose-account" className="choose-acc-btn"></NavLink>
      <div className="funds-box">
        <div className="funds">{balance} ₴</div>
        <div className="own-funds">Власні кошти: {balance} ₴</div>
        <div className="credit-limit">Кредитний ліміт: 0.00 ₴</div>
      </div>

      <button
        type="button"
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        Вийти з {username}
      </button>

      <div className="menu">
        <div className="btn-container">
          <button className="btn">|</button>
          <div className="btn-text">
            Поповнити
            <br />
            свою картку
          </div>
        </div>
        <div className="btn-container">
          <button className="btn">&gt;</button>
          <div className="btn-text">
            Переказати
            <br />
            на картку
          </div>
        </div>
        <div className="btn-container">
          <button className="btn">+</button>
          <div className="btn-text">
            Інші
            <br />
            платежі
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
