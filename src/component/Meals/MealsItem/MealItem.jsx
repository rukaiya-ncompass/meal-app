import React, {useContext} from 'react'
import styleMealItem from "./MealItem.module.css"
import { MealItemForm } from './MealItemForm'
import { CartContext } from '../../../store/cart-context'
const MealItem = props => {
const cartCtx = useContext(CartContext)
const price = `$${props.price.toFixed(2)}`;
const addToCartHandler = amount =>{
cartCtx.addItem({
  id: props.id,
  name : props.name,
  amount: amount,
  price: props.price
})
}
  return (
    <li className={styleMealItem.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styleMealItem.description}>{props.description}</div>
        <div className={styleMealItem.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart = {addToCartHandler} />
      </div>
    </li>
  )
}

export  {MealItem}
