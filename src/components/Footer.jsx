import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto sm:flex-row">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Can Surer Test Case
        </p>
        <div className="flex">
          <a href="/">
            <FaFacebook className="mx-3 text-white" />
          </a>
          <a href="/">
            <FaTwitter className="mx-3 text-white" />
          </a>
          <a href="/">
            <FaInstagram className="mx-3 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;