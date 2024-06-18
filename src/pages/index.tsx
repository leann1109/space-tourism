import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "./index.module.scss";
import bgStyles from "../styles/backgrounds.module.scss";

export const Home = () => {
  return (
    <main className={`${bgStyles.homeBG} ${bgStyles.bgSize}`}>
      <NavBar />

      <div>
      <section className={styles.description}>
        SO, YOU WANT TO TRAVEL TO<br />
        <span>SPACE</span><br />
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
        </p>
      </section>

      <section>
        <button className={styles.exploreButton}>EXPLORE</button>  
      </section>

      </div>
    </main>
  )
};