import Logo from "../assets/images/vr-group.svg";

import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <header>
        <div className="bg-secondary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img href="/" src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" />
            </a>
            <Button
              onClick={() => console.log("kajhsd")}
              buttonTitle="Log-in"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
