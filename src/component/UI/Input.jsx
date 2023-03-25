import React from 'react'
import styleInput from "./Input.module.css"
const Input = React.forwardRef((props,ref)   => {
  return (
    <div className={styleInput.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  )
});

export  {Input}
