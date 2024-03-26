import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { fetchUserProfile } from "../services/googleAuthService";

const Dashboard = () => {
  const { setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const data = fetchUserProfile();
  const user = JSON.parse(localStorage.getItem("userData"));
  const card = JSON.parse(localStorage.getItem("cardData"));

  console.log("User Data:", user);
  console.log("Card Data:", card);

  return (
    <div className="dashboard">
      <NavLink
        key=""
        to="/cards-and-accounts"
        className="cards-page-btn"
      ></NavLink>
      <div className="funds-box">
        <div className="funds">{card ? card.balance : 0} ₴</div>
        <div className="own-funds">
          Власні кошти: {card ? card.balance : 0} ₴
        </div>
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
        Вийти з {user ? user.username : data.username}
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
        <NavLink className="btn-container" key="transfer" to="/create-transfer">
          <button className="btn">&gt;</button>
          <div className="btn-text">
            Переказати
            <br />
            на картку
          </div>
        </NavLink>
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
