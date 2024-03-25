import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Cards = () => {
  const { userId, setCardId } = useAuth();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`/api/get-user-cards/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user cards");
        }
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        console.error("Error fetching user cards:", error);
      }
    };

    fetchCards();
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
