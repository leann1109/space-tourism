import React from "react";
import { Header } from "../../components/Header/Header";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Europa = () => {
  return (
    <main className={`${bgStyles.destinationBG} ${bgStyles.bgSize}`}>
      <Header />
      <div>
      01 Pick your destination<br />
        <span>Europa</span><br />
        <p>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.
        </p>

        <p>Avg. distance
  628 mil. km</p>

  <p>Est. travel time
  3 years</p>
      </div> 
    </main>
  )
}