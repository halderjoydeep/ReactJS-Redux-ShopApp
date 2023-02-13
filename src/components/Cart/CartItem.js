import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price } = props.item;
  const total = quantity * price;

  const addToCartHandler = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler.bind(null, props.item)}>
            -
          </button>
          <button onClick={addToCartHandler.bind(null, props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
