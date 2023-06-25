import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <div>
            <img src="../src/assets/Logo.svg" alt="" className={classes.LogoImg}/>
            </div>
            <div>
               <ul className={classes.ulList}>
                <li>Today's special dish</li>
                <li>why food hut</li>
                <li>menu</li>
               </ul>
            </div>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
      
    </>
  )
}

export default Header