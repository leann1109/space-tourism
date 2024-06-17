import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={`${styles.navbar} ${styles.navText}`}>
        <img 
          className={styles.navbarLogo}
          src='./assets/shared/logo.svg' 
          alt='logo'
        />
        <ul>
          <div className={styles.linksContainer}>
            <li><a className={styles.links} href="/"><strong>00 </strong>Home</a></li>
            <li><a className={styles.links} href="/destination"><strong>01 </strong>Destination</a></li>
            <li><a className={styles.links} href="/crew"><strong>02 </strong>Crew</a></li>
            <li><a className={styles.links} href="/technology"><strong>03 </strong>Technology</a></li>
          </div>
        </ul>
      </nav>
    </header>
  )
}