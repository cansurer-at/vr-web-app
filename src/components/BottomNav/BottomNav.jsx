import React, { useEffect, useState } from "react";
import "./bottomNav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(window.location.href);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  return (
    <nav>
      <a href="/" className={activeNav === "/" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      {isLoggedIn && (
        <a
          href="user-profile"
          className={activeNav === "/user-profile" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      )}
      {isLoggedIn && (
        <a
          href="#experience"
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
      )}
    </nav>
  );
};

export default BottomNav;
