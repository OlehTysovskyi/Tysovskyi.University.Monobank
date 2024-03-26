export const handleGoogleAuth = async () => {
  try {
    window.open("http://localhost:3001/auth/google", "_self");
    console.log("Login successful");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await fetch("http://localhost:3001/profile", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const handleGoogleLogin = async (userId, setUserId, setIsLoggedIn) => {
  try {
    if (!userId) {
      const user = await handleGoogleAuth();
      console.log(user);
      setIsLoggedIn(true);
      setUserId(user.id);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
