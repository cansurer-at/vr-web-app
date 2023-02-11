import Logo from "../assets/images/vr-group.svg";
import React, { useState } from "react";
import Button from "./Button";
import LoginForm from './LoginForm'

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

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
              onClick={() => setShowLoginForm(true)}
              buttonTitle="Log-in"
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



