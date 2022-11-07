import "./CartModal.css";
import { useDispatch, useSelector } from "react-redux";
import { showcart, removeelement } from "../store/cartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const inventory = useSelector((state) => state.cart.inventory);
  console.log(cart.cart);

  const purchaseHandler = () => {
    console.log("purchasing....");
  };

  const removeItemHandler = (item) => {
    console.log(item);
    dispatch(removeelement(item));
  };

  return (
    <>
      <div
        className="modal-background"
        onClick={() => dispatch(showcart())}
      ></div>
      <div className="modal">
        <h1 className="rm-margin">Your Cart</h1>
        {cart.cart.map((item) => (
          <div key={item} className="cart-line">
            <h3>{inventory[item]["name"]}</h3>
            <h4 className="push">40 xrd</h4>
            <button className="btn-remove" onClick={() => removeItemHandler(item)}> -</button>
          </div>
        ))}
        <div className="hz-line"></div>
        <div className="cart-line">
          <h3>Total</h3> <h4 className="push">{cart.cart.length * 40} xrd</h4>
          <button className="hide"> -</button>
        </div>
        <div className="btn-cart-line">
          <button className="btn danger" onClick={() => dispatch(showcart())}>
            Cancel
          </button>
          <button className="btn" onClick={purchaseHandler}>
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
