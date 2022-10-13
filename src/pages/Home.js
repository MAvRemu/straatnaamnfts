import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";
import { useSelector } from "react-redux";
import CartModal from "../components/CartModal";
import Filter from "../components/Filter";
import { useState } from "react";

const Home = (props) => {
  const showCart = useSelector((state) => state.cart.showcart);
  const [straatNamen, setStraatNamen] = useState(props.straatNamen)

  const filterHandler = (payload) => {
    if (payload === "available") {
      setStraatNamen(straatNamen.filter(
        (straatnaam) => straatnaam.available === true
      ));
    } else {
      setStraatNamen(props.straatNamen)
    }
  };

  return (
    <>
      {showCart && <CartModal />}
      <NavBar />
      <Banner />
      <Filter filter={filterHandler}></Filter>
      <StraatNamenGrid straatNamen={straatNamen}></StraatNamenGrid>
    </>
  );
};

export default Home;
