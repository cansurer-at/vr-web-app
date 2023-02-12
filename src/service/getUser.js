import getStore from "../store/store";
import { setUser } from "../pages/reducers/userSlice";

const { store } = getStore();
export const getUser = async () => {
  try {
    const user = await fetch("https://randomuser.me/api");
    const jsonUser = await user.json();
    store.dispatch(setUser(jsonUser.results[0]));
  } catch (error) {
    console.error(error);
  }
};
