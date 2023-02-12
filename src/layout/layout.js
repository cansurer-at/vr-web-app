import Home from "../pages/Home";
import UserSettings from "../pages/UserSettings";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default layout;
