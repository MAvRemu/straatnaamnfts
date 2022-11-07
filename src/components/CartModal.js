import "./CartModal.css";
import { useDispatch, useSelector } from "react-redux";
import { showcart, removeelement } from "../store/cartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const inventory = useSelector((state) => state.cart.inventory);
  const storeAccounts = useSelector((state) => state.wallet.accounts);
  console.log(cart.cart);
  console.log(storeAccounts);

  const purchaseHandler = () => {
    if (storeAccounts === null){
      alert("Please connect your MetaMask wallet before purchasing")
    }
    else {

    //Sending Ethereum to an address
    const transactionValue = cart.cart.length * 0.075 * 1e18;

    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: storeAccounts[0],
            to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
            value: transactionValue.toString(16),
            gasPrice: "0x09184e72a000",
            gas: "0x2710",
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
    }
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
            <h4 className="push">0.075 ETH</h4>
            <button
              className="btn-remove"
              onClick={() => removeItemHandler(item)}
            >
              -
            </button>
          </div>
        ))}
        <div className="hz-line"></div>
        <div className="cart-line">
          <h3>Total</h3> <h4 className="push">{(cart.cart.length * 0.075).toFixed(3)} ETH</h4>
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
