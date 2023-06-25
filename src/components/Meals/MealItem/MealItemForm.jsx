import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = (props) => {
  const amountInputRef=useRef()
  const[amountIsValid,setAmountIsValid]=useState(true)



  const submitHandler=(event)=>{
    event.preventDefault() 
    const enteredAmount=amountInputRef.current.value
    const enteredAmountNumber=+enteredAmount
    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>10){
      setAmountIsValid(false)
      return 
    } 
    props.onAddToCart(enteredAmountNumber)
    
  }


  return (
    <form className={classes.form} onSubmit={submitHandler} id='form'>
      <Input ref={amountInputRef} label='QTY' input={{
          id:'amount',
          type:'number',
          min:'1',
          max:'10',
          step:'1',
          defaultValue:'1'
        }}/>
      <button className={classes.addMealButton}>ADD</button>
        {!amountIsValid && alert('please enter a amount between 1 and 10')}
    </form>
  )
}

export default MealItemForm