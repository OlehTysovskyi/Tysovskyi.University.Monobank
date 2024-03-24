import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { NavLink } from "react-router-dom";

const Dashboard = ({}) => {
  const { setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const user = JSON.parse(localStorage.getItem("userData"));
  const account = JSON.parse(localStorage.getItem("accountData"));

  return (
    <div className="dashboard">
      <NavLink key="" to="/choose-account" className="choose-acc-btn"></NavLink>
      <div className="funds-box">
        <div className="funds">{account.balance} ₴</div>
        <div className="own-funds">Власні кошти: {account.balance} ₴</div>
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
        Вийти з {user.username}
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
