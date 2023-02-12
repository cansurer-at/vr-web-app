import React, { useEffect, useState } from "react";
import "./bottomNav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(window.location.href);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setActiveNav(window.location.pathname);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <nav style={{ display: showNav ? "flex" : "none" }}>
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

      <a
        href="content-rich"
        className={activeNav === "/content-rich" ? "active" : ""}
      >
        <BiBook />
      </a>
    </nav>
  );
};

export default BottomNav;