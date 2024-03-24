const getUserData = async () => {
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

export default getUserData;
