import React, { useContext, useEffect, useState } from "react";
import styleHeaderCartButton from "./HeaderCartButton.module.css";
import { CartIcon } from "../Cart/CartIcon";
import { CartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCardItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${styleHeaderCartButton.button} ${
    btnIsHighlighted ? styleHeaderCartButton.bump : ""
  }`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {}
    setBtnIsHighlighted(true);
    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    },300)
    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={styleHeaderCartButton.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styleHeaderCartButton.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export { HeaderCartButton };
