import React from 'react'
import classes from './Navbar.module.css'
import nav_Logo from '../../Assets/Admin_Assets/nav-logo.svg'
import nav_profile from '../../Assets/Admin_Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className={classes.navbar}>
          <img src={nav_Logo} alt="navigation logo" className={classes.nav_Logo} />
          <img src={nav_profile} alt="navigation profile" className={classes.nav_profile} />
    </div>
  )
}

export default Navbar
