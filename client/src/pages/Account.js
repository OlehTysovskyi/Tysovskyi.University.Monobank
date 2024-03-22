import React from "react";
import Dashboard from "../components/Dashboard";
import TransactionHistory from "../components/TransactionHistory";
import { useAuth } from "../contexts/authContext";

const Account = () => {
  const { userId, accountId } = useAuth();

  return (
    <>
      <Dashboard userId={userId} accountId={accountId} />
      <TransactionHistory userId={userId} />
    </>
  );
};

export default Account;
