import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet>
        
      </Outlet>
    </>
  );
};

export default layout;
