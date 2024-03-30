import React, { useState, useEffect } from "react";
import TransactionItem from "./TransactionItem";
import { useAuth } from "../contexts/authContext";
import { getUserTransfers } from "../services/userService";

const TransactionHistory = () => {
  const { currentUser, setCurrentCard } = useAuth();
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = currentUser ? JSON.parse(currentUser).id : null;
        const transfersData = await getUserTransfers(userId);
        setTransfers(transfersData || []);
      } catch (error) {
        console.error("Error fetching user transfers:", error);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleTransferClick = (card) => {
    setCurrentCard(JSON.stringify(card));
  };

  return (
    <div className="trans-hist">
      {transfers.map((transfer) => (
        <TransactionItem
          key={transfer.id}
          transfer={transfer}
          onClick={handleTransferClick}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
