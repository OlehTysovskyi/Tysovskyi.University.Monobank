import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Navigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const { setIsLoggedIn, setUserId } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
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
        setRedirect(true);
      } else {
        console.error("Login failed");
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
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <GoogleButton
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </form>
      <p>
        Don't have an account?{" "}
        <NavLink to="/registration">Register here</NavLink>
      </p>
    </div>
  );
};

export default Login;
