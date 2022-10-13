import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { showcart } from "../store/cartSlice";

const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <NavLink to="/home" className="navitem" end>
        Home
      </NavLink>
      <h1 onClick={() => dispatch(showcart()) } className="navitem"> Cart ({cartCount}) </h1>
      <NavLink to="/login" className="navitem" end>
        Connect
      </NavLink>
    </div>
  );
};

export default NavBar;
