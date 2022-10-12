import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/cartSlice";

const Home = (props) => {
  const value = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <>
      <NavBar />
      <Banner />
      <button onClick={() => dispatch(increment())}>Click me!</button>
      <StraatNamenGrid straatNamen={props.straatNamen}></StraatNamenGrid>
    </>
  );
};

export default Home;
