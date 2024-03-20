import React from "react";

const TransactionItem = ({ avatar, username, amount }) => {
  return (
    <div className="trans-item">
      <div className="user-data">
        <div className="avatar"></div>
        <div className="username">oleh</div>
      </div>
      <div className="amount">-1500.00</div>
    </div>
  );
};

export default TransactionItem;
