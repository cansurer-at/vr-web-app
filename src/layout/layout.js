import Home from "../pages/Home";
import { Provider } from "react-redux";
import getStore from "../store/store";

const { store } = getStore();

const layout = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default layout;
