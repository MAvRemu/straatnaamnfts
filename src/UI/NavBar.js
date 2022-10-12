import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home" className="navitem" end>
        Home
      </NavLink>
      <NavLink to="/cart" className="navitem" end>
        Cart
      </NavLink>
      <NavLink to="/login" className="navitem" end>
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
