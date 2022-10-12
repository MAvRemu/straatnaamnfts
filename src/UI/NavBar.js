import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.value);

  return (
    <div className="navbar">
      <NavLink to="/home" className="navitem" end>
        Home
      </NavLink>
      <NavLink to="/cart" className="navitem" end>
        Cart ({cartCount})
      </NavLink>
      <NavLink to="/login" className="navitem" end>
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
