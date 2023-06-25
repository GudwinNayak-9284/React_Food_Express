import React, { useContext,useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/cart_context'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import {IoBagCheckOutline} from 'react-icons/io5'
const Cart = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const cartCtx=useContext(CartContext)
  const totalAmount = `₹ ${Math.round(cartCtx.totalAmount)}`
  const hasItems=cartCtx.items.length >0

  const cartItemRemoverHandler=(id)=>{
   cartCtx.removeItem(id)
  }
  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})
  }

    const cartItems = (<ul className={classes.cart_items}>
    {cartCtx.items.map((item)=>(
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
       onRemove={cartItemRemoverHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
    ))}
    </ul>)

const handleSubmitOrder = () => {
    setTimeout(() => {
      setModalVisible(true);
    }, 2000);
  };

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
        <h3 className={classes.total}>Total amount</h3>
        <p className={classes.total}>{totalAmount}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose}>close</button>
            {hasItems && <button onClick={handleSubmitOrder}>order</button>}
        </div>
        {modalVisible && (
        <div className={classes.modal}>
          <div className={classes.modal_content}>
            <span className={classes.close} onClick={props.onClose}>
              &times;
            </span>
            <p><IoBagCheckOutline/>Order placed successfully!</p>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default Cart