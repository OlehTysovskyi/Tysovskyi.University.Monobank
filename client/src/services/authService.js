export const login = async (formData, setIsLoggedIn, setUserId) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const data = await response.json();
    console.log("Login successful");
    setIsLoggedIn(true);
    setUserId(data.userId);
    return true;
  } else {
    console.error("Login failed");
    return false;
  }
};

export const register = async (formData, setIsLoggedIn) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("User registered successfully");
      setIsLoggedIn(true);
      return true;
    } else if (response.status === 400) {
      alert(data.message);
      return false;
    } else {
      console.error("Registration failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
