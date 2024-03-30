import React from "react";

const TransactionItem = ({ transfer, onClick }) => {
  const handleItemClick = () => {
    onClick(transfer);
  };

  const amountWithSign =
    transfer.type === "OUTGOING"
      ? "-" + transfer.amount
      : "+" + transfer.amount;

  return (
    <div className="trans-item" onClick={handleItemClick}>
      <div className="user-data">
        <div className="avatar"></div>
        <div className="username">{transfer.sender_username}</div>
      </div>
      <div className="amount">{amountWithSign}</div>
    </div>
  );
};

export default TransactionItem;
