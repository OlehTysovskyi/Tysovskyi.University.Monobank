// const createCard = async () => {
//   try {
//     const response = await fetch("/api/create-account", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       console.log("Account created successfully");
//       setRedirect(true);
//     } else if (response.status === 400) {
//       alert(data.message);
//     } else {
//       console.error("Account creating failed");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

const getCardData = async () => {
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

export default getCardData;
