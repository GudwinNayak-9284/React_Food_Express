import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../../store/cart_context'
import RatingIcon from '../../../assets/rating.svg'
import Card from '../../UI/Card'
const MealItem = (props) => {


  const cartCtx=useContext(CartContext)
  const price=`${Math.round(props.price)}`
  
  const addToCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      img:props.img,
      amount:amount,
      price:props.price
    })
  }

  return (
  <div>
  <h3 className={classes.mealPrice}>{`₹ ${price}`}</h3>
     <Card>
    <div className={classes.mealImgBox}>
    <img src={props.img} alt="Meal-Img" className={classes.MealImg}/>
    </div>
    <div className={classes.mealBox}>
    
    <div className={classes.ratingBox}><img src={RatingIcon} alt=""  width={20} height={20}/><p className={classes.ratingCount}>{`(4.5)`}</p></div>
    <h2 className={classes.name}>{props.name}</h2>
    <p className={classes.description}>{props.description}</p>
   
      <MealItemForm onAddToCart={addToCartHandler}/>
    </div>
   </Card>
  </div>
  )
}

export default MealItem