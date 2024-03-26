import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { createTransfer } from "../services/transferService";

const CreateTransfer = () => {
  const card = JSON.parse(localStorage.getItem("cardData"));

  const [formData, setFormData] = useState({
    sender_card_num: card.number,
    recipient_card_num: "",
    amount: 0,
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatingTransfer = async (e) => {
    e.preventDefault();

    try {
      await createTransfer(formData);
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
        onSubmit={handleCreatingTransfer}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <input
          type="text"
          name="sender_card_num"
          value={formData.sender_card_num}
          onChange={handleChange}
          placeholder="Sender Card Number"
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        /> */}
        <input
          type="text"
          name="recipient_card_num"
          value={formData.recipient_card_num}
          onChange={handleChange}
          placeholder="Recipient Card Number"
          style={{ marginBottom: "10px", padding: "8px", width: "300px" }}
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
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
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default CreateTransfer;
