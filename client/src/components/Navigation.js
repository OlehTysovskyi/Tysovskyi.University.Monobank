import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../App";
import RegistrationForm from "../pages/Registration";
import LoginForm from "../pages/Login";
import Account from "../pages/Account";
import CreateAccount from "../pages/CreateAccount";
import ChooseAccount from "../pages/ChooseAccount";

import { useAuth } from "../contexts/authContext";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Account />} /> */}
          <Route index element={isLoggedIn ? <Account /> : <Navigate to="/login" />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/choose-account" element={<ChooseAccount />} />
        </Route>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
