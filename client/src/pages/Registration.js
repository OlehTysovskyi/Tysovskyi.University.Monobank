import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Registration = () => {
  const { setIsLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

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
        setRedirect(true);
      } else if (response.status === 400) {
        alert(data.message);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleRegistration}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your username"
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login here</NavLink>
      </p>
    </div>
  );
};

export default Registration;
