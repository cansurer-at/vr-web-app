import Home from "../pages/Home";
import { Provider } from "react-redux";
import store from "../store/store";



const layout = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default layout
