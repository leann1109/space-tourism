import React from "react";
import { Header } from "../../components/Header/Header";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Mars = () => {
  return (
    <main className={`${bgStyles.destinationBG} ${bgStyles.bgSize}`}>
      <Header />
      <div>
      01 Pick your destination<br />
        <span>Mars</span><br />
        <p>
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!
        </p>

        <p>Avg. distance
  225 mil. km</p>

  <p>Est. travel time
  9 months</p>
      </div> 
    </main>
  )
}