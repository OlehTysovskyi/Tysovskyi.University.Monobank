import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const CreateAccount = () => {
  const { userId } = useAuth();

  const [formData, setFormData] = useState({
    user_id: userId,
    account_type: "Savings",
    balance: 0,
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatingAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Account created successfully");
        setRedirect(true);
      } else if (response.status === 400) {
        alert(data.message);
      } else {
        console.error("Account creating failed");
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
        onSubmit={handleCreatingAccount}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <select
          name="account_type"
          value={formData.account_type}
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        >
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
          <option value="Credit">Credit</option>
        </select>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create account
        </button>
      </form>
      <p>
        <NavLink to="/">Go back</NavLink>
      </p>
    </div>
  );
};

export default CreateAccount;
