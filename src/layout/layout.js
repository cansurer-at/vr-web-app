import Header from "../components/Header";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default layout;
