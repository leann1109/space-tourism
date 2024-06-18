import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Pilot = () => {
  return (
    <main className={`${bgStyles.crewBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      02 Meet your crew<br />
        <span>Pilot</span><br />
        <p>Victor Glover</p>
        <p>
        Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. 
        </p>
      </div> 
    </main>
  )
}