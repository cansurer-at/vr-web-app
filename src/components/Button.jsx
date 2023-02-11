import React from "react";

const Button = ({ buttonTitle, onClick }) => {
  return (
    <button
      className="text-primary-text focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
