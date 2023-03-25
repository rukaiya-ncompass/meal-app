import React, { useContext, useState } from "react";
import styleCart from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { CartContext } from "../../store/cart-context";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    //const response =
    await fetch(
      "https://meals-shopping-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  };
  const cartItems = (
    <ul className={styleCart["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.n4}
          amount={item.name}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={styleCart.actions}>
      <button className={styleCart["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={styleCart.button}>
          Order
        </button>
      )}
    </div>
  );
  const cardModalContent = (
    <>
      {" "}
      {cartItems}
      <div className={styleCart.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );
  const isSubmittingModalContent = <p>Sending order data</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully submitted data</p>{" "}
      <div className={styleCart.actions}>
        <button className={styleCart.button} onClick={props.onClose}>
          Close
        </button>{" "}
      </div>{" "}
    </>
  );
  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && cardModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export { Cart };
