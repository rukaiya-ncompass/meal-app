import React from 'react'
import mealImage from "../../assets/meals.jpg"
import styleHeader from "./Header.module.css"
import { HeaderCartButton } from './HeaderCartButton'
const Header = props => {

  return (
    <>
      <header className={styleHeader.header}>
        <h1>React meals</h1>
      <HeaderCartButton onClick = {props.onShowCart}/>
      </header>
      <div className={styleHeader['main-image']}>
        <img src={mealImage} alt='Table full of food' />
      </div>
    </>
  )
}

export { Header}
