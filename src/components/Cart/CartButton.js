import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);

  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
