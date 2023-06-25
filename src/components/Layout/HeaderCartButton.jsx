import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart_context'

const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext)
  const numberOfCartItems=cartCtx.items.reduce((currNum,item)=>{
    return currNum + item.amount
  },0)
  
  return ( 
    <div>
    <button className={classes.cartBtn} onClick={props.onClick}>
    <FaShoppingCart className={classes.icon}/>your Cart<span className={classes.count}>{numberOfCartItems}</span></button>
    </div>
  )
}

export default HeaderCartButton