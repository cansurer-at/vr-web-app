import Header from "../components/Header";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import RandomMap from "../components/RandomMap";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet>
      </Outlet>
      <RandomMap />
      <Footer />
    </>
  );
};

export default layout;
