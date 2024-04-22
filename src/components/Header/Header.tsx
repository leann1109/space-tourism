import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <img 
          className={styles.navbarLogo}
          src='./assets/shared/logo.svg' 
          alt='logo'
        />
        <ul>
          <div className={styles.linksContainer}>
            <li><strong>00 </strong>Home</li>
            <li><strong>01 </strong>Destination</li>
            <li><strong>02 </strong>Crew</li>
            <li><strong>03 </strong>Technology</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}