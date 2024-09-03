import React from "react";
import "./Cart.scss";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  // handle payment using stripe
  const stripePromise = loadStripe(
    "pk_test_51N5KGtDks8HMtUn4tyrYs9vS6KZ3VM9aDQsAhyTQ32XC5xjgAGjczl7dPsIUy4C9fOK4EYcvx00U6ohKvj6x7tI400SeONYL18"
  );

  // console.log(stripePromise);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });

      // console.log(res);
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      // console.log(products);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <RemoveCircleIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;