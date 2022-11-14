import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { showcart } from "../store/cartSlice";
import { setAccounts } from "../store/walletSlice";

const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);
  const storeAccounts = useSelector((state) => state.wallet.accounts);

  const dispatch = useDispatch();

  const handleConnectWallet = async () => {
    if (!!window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(setAccounts(accounts));
    } else {
      alert(
        "please install the MetaMask extension in order to use this website"
      );
    }
  };

  const handleDisconnectWallet = async () => {
    dispatch(setAccounts(null));
  };

  return (
    <div className="navbar">
      <NavLink to="/straatnaamnfts/home" className="navitem" end>
        Home
      </NavLink>
      <div className="flex">
        <div className="img-cart" alt="cart-img"></div>
        <h1 onClick={() => dispatch(showcart())} className="navitem">
          Cart ({cartCount})
        </h1>
      </div>
      {storeAccounts ? (
        <h1 className="navbtn" onClick={handleDisconnectWallet}>
          {storeAccounts[0].slice(0, 5) + "....." + storeAccounts[0].slice(-5)}
        </h1>
      ) : (
        <h1 onClick={handleConnectWallet} className="navbtn">
          Connect Wallet
        </h1>
      )}
    </div>
  );
};

export default NavBar;
