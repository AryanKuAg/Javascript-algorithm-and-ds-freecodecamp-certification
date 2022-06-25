import React from 'react'
import styles from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <nav className={`${styles.header} ${styles.nav}`}>
        <h1 className={styles.logo}>Great Quotes</h1>
        <ul>
            <li><a href="#">All Quotes</a></li>
            <li><a href='#'>Add a Quote</a></li>
        </ul>
    </nav>
  )
}

export default MainNavigation