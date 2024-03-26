const Card = require("../models/card");

async function generateUniqueCardNumber() {
  const cardLength = 16;
  const characters = "0123456789";
  let card_number;

  while (true) {
    card_number = "";
    for (let i = 0; i < cardLength; i++) {
      card_number += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    const existingCard = await Card.findOne({
      where: { number: card_number },
    });
    if (!existingCard) {
      break;
    }
  }

  return card_number;
}

async function createCard(req, res) {
  const { user_id, type, balance } = req.body;
  const current_date = new Date();
  const expiry_date = new Date(
    current_date.getFullYear() + 10,
    current_date.getMonth(),
    current_date.getDate()
  );

  try {
    const card_number = await generateUniqueCardNumber();

    const card = await Card.create({
      user_id: user_id,
      number: card_number,
      type: type,
      balance: balance,
      expiry_date: expiry_date,
    });

    res.status(201).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while creating card" });
  }
}

const getUserCards = async (req, res) => {
  const user_id = req.params.userId;

  try {
    const cards = await Card.findAll({ where: { user_id: user_id } });
    console.error(cards);
    res.status(200).send({ cards: cards });
  } catch (error) {
    console.error("Error while fetching user cards:", error);
    res.status(500).json({ error: "Error while fetching user cards" });
  }
};

const getCardById = async (req, res) => {
  const card_id = req.params.cardId;

  try {
    const card = await Card.findOne({
      where: { id: card_id },
    });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).send({ card: card });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching card" });
  }
};

module.exports = {
  createCard,
  getUserCards,
  getCardById,
};
