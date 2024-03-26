export const getUserData = async () => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      return null;
    }

    const response = await fetch(`/api/get-user-by-id/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await response.json();
    return userData.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const getUserCards = async (userId) => {
  try {
    const response = await fetch(`/api/get-user-cards/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user cards");
    }
    const data = await response.json();
    return(data.cards);
  } catch (error) {
    console.error("Error fetching user cards:", error);
  }
};

const userService = {
  getUserData,
  getUserCards,
};

export default userService;
