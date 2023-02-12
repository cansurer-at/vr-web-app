import Logo from "../assets/images/vr-group.svg";
import React, { useState } from "react";
import Button from "./Button";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../pages/reducers/authSlice";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();

  function logoutFunc() {
    dispatch(logout());
  }

  return (
    <div>
      <header>
        <div className="bg-secondary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img href="/" src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" />
              <h1 href="/" className="text-primary-text">
                VR Tech Platform
              </h1>
            </a>
            <Button
              onClick={() => (isLoggedIn ? logoutFunc() : setShowLoginForm(true))}
              buttonTitle={isLoggedIn ? "Log-out" : "Log-in"}
            />
          </div>
        </div>

        {showLoginForm && (
          <LoginForm
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
