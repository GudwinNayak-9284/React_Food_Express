import React from 'react'
import classes from './Input.module.css'
import { forwardRef } from 'react'
const Input = forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
    <label htmlFor={props.input.id} className={classes.label}>
        {props.label}
    </label>
    <input className={classes.inputCount} ref={ref} {...props.input} />
    </div>
  )
})

export default Input