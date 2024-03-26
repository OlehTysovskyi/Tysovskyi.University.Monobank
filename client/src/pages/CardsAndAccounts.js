import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { getUserCards } from "../services/userService";

const Cards = () => {
  const { userId, setCardId } = useAuth();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsData = await getUserCards(userId);
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching user cards:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleCardClick = (cardId) => {
    setCardId(cardId);
  };

  return (
    <div className="cards">
      <NavLink className="back-btn" to="/">
        -
      </NavLink>
      <div className="header">Cards and accounts</div>
      <div className="cards-container">
        {cards.map((card) => (
          <NavLink key={card.id} to="/">
            <div className="card" onClick={() => handleCardClick(card.id)}>
              <div className="card-content">
                <div>Type: {card.type}</div>
                <div className="account-number">{card.number}</div>
                <div>Balance: {card.balance}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cards;
