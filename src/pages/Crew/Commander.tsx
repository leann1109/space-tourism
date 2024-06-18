import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Commander = () => {
  return (
    <main className={`${bgStyles.crewBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      02 Meet your crew<br />
        <span>Commander</span><br />
        <p>Douglas Hurley</p>
        <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.
        </p>
      </div> 
    </main>
  )
}