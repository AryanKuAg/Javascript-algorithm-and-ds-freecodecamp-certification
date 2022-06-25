import React from 'react'
import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <nav className={`${styles.header} ${styles.nav}`}>
        <h1 className={styles.logo}>Great Quotes</h1>
        <ul>
            <li><NavLink to="/quotes">All Quotes</NavLink></li>
            <li><NavLink to='/new-quote'>Add a Quote</NavLink></li>
        </ul>
    </nav>
  )
}

export default MainNavigation