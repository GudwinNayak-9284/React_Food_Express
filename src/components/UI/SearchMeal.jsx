import React from 'react'
import { BiSearch } from 'react-icons/bi';

import classes from './SearchMeal.module.css'

const SearchMeal = () => {
  return (
    <div className={classes.inputcontainer}>
      <input
        type="text"
        className={classes.custominput}
        placeholder="Search"
      />
      <div className={classes.iconcontainer}>
        <BiSearch className={classes.searchicon}/>
      </div>
      <div className={classes.container_2}>
      <BiSearch className={classes.searchicon_2}/>
      </div>
    </div>
  )
}

export default SearchMeal