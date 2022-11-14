import StraatNaamBord from "../components/StraatNaamBord";
import "./StraatNamenGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { addelement } from "../store/cartSlice";

const StraatNamenGrid = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCartHandler = (event, string) => {
    dispatch(addelement(+event.target.id));
    props.setShowBanner(true);
    props.setBannerText(string);
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
                  onClick={(event) => addToCartHandler(event, "Added to Cart")}
                  id={straatname.key}
                  className="card-btn"
                >
                  Add To Cart
                </h3>
              )}

            {!straatname.available &&
              !cart.cart.includes(parseInt(straatname.key)) && (
                <h3 className="card-btn btn-grey"> Sold </h3>
              )}
            {cart.cart.includes(parseInt(straatname.key)) && (
              <div className="flex card-btn justify-content">
                <div className="img-cart nomargin" alt="cart-img"></div>
                <h3 className="margin-left">In Cart</h3>
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
