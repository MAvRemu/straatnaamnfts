import { NavLink } from "react-router-dom";
import NavBar from "../UI/NavBar";
import Banner from "../UI/Banner";
import StraatNamenGrid from "../components/StraatNamenGrid";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <Banner />
      <StraatNamenGrid straatNamen={props.straatNamen}></StraatNamenGrid>
    </>
  );
};

export default Home;
