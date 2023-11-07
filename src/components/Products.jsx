import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { clearCart } from "../features/cart/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      {cartItems.map((item) => {
        return <Cart key={item.id} {...item} />;
      })}

      <button onClick={() => dispatch(clearCart())}>clearCart</button>
    </div>
  );
}

export default Products;
