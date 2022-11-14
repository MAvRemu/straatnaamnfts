import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";
import { useSelector } from "react-redux";
import CartModal from "../components/CartModal";
import Filter from "../components/Filter";
import AddedToCartBanner from "../components/AddedToCartBanner";
import { useEffect, useState } from "react";

const Home = (props) => {
  const cart = useSelector((state) => state.cart);
  const inventory = useSelector((state) => state.cart.inventory);
  const [straatNamen, setStraatNamen] = useState(inventory);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerText, setBannerText] = useState("nada");

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
    } else if (payload === "cart") {
      setStraatNamen(
        inventory.filter((straatnaam) =>
          cart.cart.includes(parseInt(straatnaam.key))
        )
      );
    } else {
      setStraatNamen(inventory);
    }
  };

  return (
    <>
      {cart.showcart && <CartModal />}
      <NavBar setShowBanner={setShowBanner} setBannerText={setBannerText} />
      <Banner />
      <Filter filter={filterHandler}></Filter>
      <StraatNamenGrid
        straatNamen={straatNamen}
        setShowBanner={setShowBanner}
        setBannerText={setBannerText}
      ></StraatNamenGrid>
      {showBanner && <AddedToCartBanner>{bannerText}</AddedToCartBanner>}
    </>
  );
};

export default Home;
