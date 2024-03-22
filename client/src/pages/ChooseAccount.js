import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ChooseAccount = () => {
  const { userId, setAccountId } = useAuth();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch(`/api/get-user-accounts/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user accounts");
        }
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching user accounts:", error);
      }
    };

    fetchAccounts();
  }, [userId]);

  const handleAccountClick = (accountId) => {
    setAccountId(accountId);
  };

  return (
    <div className="choose-account">
      <NavLink className="back-btn" to="/">
        -
      </NavLink>
      <div className="header">Cards:</div>
      <div className="cards-container">
        {accounts.map((account) => (
          <NavLink key={account.account_id} to="/">
            <div
              className="card"
              onClick={() => handleAccountClick(account.account_id)}
            >
              <div className="card-content">
                <div>{account.account_type}</div>
                <div className="account-number">{account.account_number}</div>
                <div>Balance: {account.balance}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ChooseAccount;
