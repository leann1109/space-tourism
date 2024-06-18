import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Engineer = () => {
  return (
    <main className={`${bgStyles.crewBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      02 Meet your crew<br />
        <span>Flight Engineer</span><br />
        <p>Anousheh Ansari</p>
        <p>
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. 
        </p>
      </div> 
    </main>
  )
}