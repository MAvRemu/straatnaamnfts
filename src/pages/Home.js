import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";
import { useSelector } from "react-redux";
import CartModal from "../components/CartModal";

const Home = (props) => {
  const showCart = useSelector((state) => state.cart.showcart)
  console.log(showCart);


  return (
    <>
      { showCart && <CartModal/> }
      <NavBar />
      <Banner />
      <StraatNamenGrid straatNamen={props.straatNamen}></StraatNamenGrid>
    </>
  );
};

export default Home;
