import React from "react";
import { Header } from "../../components/Header/Header";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Technology2 = () => {
  return (
    <main className={`${bgStyles.technologyBG} ${bgStyles.bgSize}`}>
      <Header />
      <div>
      03 Space launch 101<br />
        <span>The terminology...
  Spaceport</span><br />

  1
  2
  3
        <p>
        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.
        </p>
      </div> 
    </main>
  )
}