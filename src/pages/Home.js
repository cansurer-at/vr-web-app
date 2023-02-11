import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/store";

const Home = () => {

    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>
        <p>{value}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};

export default Home;
