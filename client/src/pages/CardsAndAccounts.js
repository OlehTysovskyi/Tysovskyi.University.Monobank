import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { getUserCards } from "../services/userService";

const Cards = () => {
  const { currentUser, setCurrentCard } = useAuth();
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsData = await getUserCards(JSON.parse(currentUser).id);
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching user cards:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setCurrentCard(JSON.stringify(card));
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
            <div
              className={`card ${selectedCard && selectedCard.id === card.id ? "selected" : ""}`}
              onClick={() => handleCardClick(card)}
            >
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
