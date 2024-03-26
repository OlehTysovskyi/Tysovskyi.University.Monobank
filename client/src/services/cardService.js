export const createCard = async (formData) => {
  try {
    const response = await fetch("/api/create-card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Card created successfully");
      return data;
    } else if (response.status === 400) {
      throw new Error(data.message);
    } else {
      throw new Error("Card creating failed");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCardData = async () => {
  try {
    const cardId = localStorage.getItem("cardId");
    if (!cardId) {
      return null;
    }

    const response = await fetch(`/api/get-card-by-id/${cardId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const cardData = await response.json();
    return cardData.card;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

const cardService = {
  createCard,
  getCardData,
};

export default cardService;
