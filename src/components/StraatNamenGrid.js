import StraatNaamBord from "../components/StraatNaamBord";
import "./StraatNamenGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { addelement } from "../store/cartSlice";

const StraatNamenGrid = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCartHandler = (event) => {
    dispatch(addelement(+event.target.id));
    props.setShowBanner(true);
    setTimeout(() => props.setShowBanner(false), 2000);
  };

  const showCartHandler = () => {
    console.log(cart.cart);
  };

  return (
    <div className="container">
      <div className="grid-upper-line"></div>
      <div className="grid-container">
        {props.straatNamen.map((straatname) => (
          <div className="card-outer" key={straatname.key}>
            <div className="card grid-item">
              <StraatNaamBord>{straatname.name}</StraatNaamBord>
            </div>

            {straatname.available &&
              !cart.cart.includes(parseInt(straatname.key)) && (
                <h3
                  onClick={addToCartHandler}
                  id={straatname.key}
                  className="card-btn"
                >
                  Add to cart
                </h3>
              )}

            {!straatname.available &&
              !cart.cart.includes(parseInt(straatname.key)) && (
                <h3 className="card-btn btn-grey"> sold </h3>
              )}

            {console.log(cart.cart)}
            {console.log(typeof straatname.key)}
            {cart.cart.includes(parseInt(straatname.key)) && (
              <div className="flex card-btn btn-grey justify-content">
                <div className="img-cart nomargin" alt="cart-img"></div>
                <h3 className="margin-left">In your cart</h3>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={showCartHandler}>show cart</button>
    </div>
  );
};

export default StraatNamenGrid;
