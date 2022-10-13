import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";
import { useSelector } from "react-redux";
import CartModal from "../components/CartModal";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";

const Home = (props) => {
  const showCart = useSelector((state) => state.cart.showcart);
  const inventory = useSelector((state) => state.cart.inventory);
  const [straatNamen, setStraatNamen] = useState(inventory);

  useEffect(() => {
    setStraatNamen(inventory);
  }, [inventory]);

  const filterHandler = (payload) => {
    if (payload === "available") {
      setStraatNamen(
        inventory.filter((straatnaam) => straatnaam.available === true)
      );
    } else if (payload === "sold") {
      setStraatNamen(
        inventory.filter((straatnaam) => straatnaam.available === false)
      );
    } else {
      setStraatNamen(inventory);
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
