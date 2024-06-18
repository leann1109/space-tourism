import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Specialist = () => {
  return (
    <main className={`${bgStyles.crewBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      02 Meet your crew<br />
        <span>Mission Specialist</span><br />
        <p>Mark Shuttleworth</p>
        <p>
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.
        </p>
      </div> 
    </main>
  )
}