import "./CartModal.css";
import { useDispatch, useSelector } from "react-redux";
import { showcart } from "../store/cartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const inventory = useSelector((state) => state.cart.inventory);
  console.log(cart.cart);

  const purchaseHandler = () => {
    console.log("purchasing....");
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
            <h3>{inventory[item]["name"]}</h3> <h4>40 xrd</h4>
          </div>
        ))}
        <div className="hz-line"></div>
        <div className="cart-line">
          <h3>total</h3> <h4>{cart.cart.length * 40} xrd</h4>
        </div>
        <div className="btn-cart-line">
          <button className="btn danger" onClick={() => dispatch(showcart())}>
            {" "}
            Cancel{" "}
          </button>
          <button className="btn" onClick={purchaseHandler}>
            {" "}
            Purchase{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
