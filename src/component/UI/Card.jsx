import React from 'react'
import styleCard from "./Card.module.css"
const Card = props => {
  return (
    <div className = {`${props.className} ${styleCard.card}`}>
      {props.children}
    </div>
  )
}

export  {Card}
