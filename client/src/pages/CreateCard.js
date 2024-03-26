import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { createCard } from "../services/cardService";

const CreateCard = () => {
  const { userId } = useAuth();

  const [formData, setFormData] = useState({
    user_id: userId,
    type: "BLACK",
    balance: 0,
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatingAccount = async (e) => {
    e.preventDefault();

    try {
      await createCard(formData);
      setRedirect(true);
    } catch (error) {
      alert(error.message);
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
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        >
          <option value="BLACK">BLACK</option>
          <option value="WHITE">WHITE</option>
          <option value="CHILD">CHILD</option>
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
          Create card
        </button>
      </form>
      <p>
        <NavLink to="/">Go back</NavLink>
      </p>
    </div>
  );
};

export default CreateCard;
