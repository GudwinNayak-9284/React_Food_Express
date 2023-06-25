import React from 'react'
import classes from './MealsSummary.module.css'
import SearchMeal from '../UI/SearchMeal'

const MealsSummary = () => {
  return (
    <section className={classes.summaryDetail}>
       <div className={classes.leftSection}>
       <img src="../src/assets/peopleTrust.svg" alt="" />
       <h2 className={classes.summaryHeading}>
       We're <span style={{color:'#F65F5F'}}>Serious</span> For <span style={{color:'#F65F5F'}}>Food</span> & <span className={classes.bottomStyle} style={{color:'#FDCE77'}}>Delivery</span>.</h2>
       <p className={classes.summaryAbout}>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
       <p className={classes.summaryAbout2}>choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
       <SearchMeal/>
       </div>
       <div>
       <div className={classes.headerImg}>
                <img src="../src/assets/headerImg.svg" alt=""/>
       </div>
       </div>
    </section>
  )
}

export default MealsSummary