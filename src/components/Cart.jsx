import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Cart = ({ id, title, price, img, amount }) => {
  //   const { cartItems } = useSelector((state) => state.cart);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  //   const { amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(calculateTotals());
  //   }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  //   const { amount } = useSelector((state = state.cart));

  return (
    <div>
      {/* <h2>Total: {calculateTotals}</h2> */}
      <h2>{amount}</h2>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <img src={img} />
      <button onClick={() => dispatch(increase({ id }))}>inc</button>
      <button onClick={() => dispatch(decrease({ id }))}>dec</button>
      <button onClick={() => dispatch(removeItem(id))}>remove</button>
    </div>
  );
};

export default Cart;
