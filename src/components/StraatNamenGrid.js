import StraatNaamBord from "../components/StraatNaamBord";
import "./StraatNamenGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { addelement } from "../store/cartSlice"


const StraatNamenGrid = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const addToCartHandler = (event) => {
    console.log(event);
    dispatch(addelement());
    console.log(cart);
  };

  return (
    <div className="container">
      <div className="grid-container">
        {props.straatNamen.map((straatname) => (
          <div className="card grid-item" key={straatname.key}>
            <StraatNaamBord>{straatname.name}</StraatNaamBord>
            <h3 onClick={addToCartHandler} id={straatname.key}>
              Add to cart
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StraatNamenGrid;
