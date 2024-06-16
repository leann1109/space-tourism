import React from "react";
import { Header } from "../../components/Header/Header";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Moon = () => {
  return (
    <main className={bgStyles.destinationBG}>
      <Header />
      <div>
      01 Pick your destination<br />
        <span>Moon</span><br />
        <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
        </p>

        <p>Avg. distance
        384,400 km</p>

  <p>Est. travel time
  3 days</p>
      </div> 
    </main>
  )
}