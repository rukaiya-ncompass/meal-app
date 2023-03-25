import styleCartItem from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styleCartItem['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styleCartItem.summary}>
          <span className={styleCartItem.price}>{price}</span>
          <span className={styleCartItem.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styleCartItem.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
