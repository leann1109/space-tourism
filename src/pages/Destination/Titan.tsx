import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Titan = () => {
  return (
    <main className={`${bgStyles.destinationBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      01 Pick your destination<br />
        <span>Titan</span><br />
        <p>
        The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
        </p>

        <p>Avg. distance
        1.6 bil. km</p>

  <p>Est. travel time
  7 years</p>
      </div> 
    </main>
  )
}