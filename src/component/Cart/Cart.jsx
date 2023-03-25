import React, { useContext } from "react";
import styleCart from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import CartItem from "./CartItem";
import { CartContext } from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {cartCtx.removeItem(id)};
  const cartItemAddHandler = (item) => {
cartCtx.addItem(item)
  };
  const cartItems = (
    <ul className={styleCart["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.n4}
          amount={item.name}
          price={item.price}
          onRemove = {cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styleCart.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styleCart.actions}>
        <button className={styleCart["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styleCart.button}>Order</button>}
      </div>
    </Modal>
  );
};

export { Cart };
