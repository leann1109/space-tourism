import React from "react";
import { Header } from "../../components/Header/Header";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Technology3 = () => {
  return (
    <main className={bgStyles.technologyBG}>
      <Header />
      <div>
      03 Space launch 101<br />
        <span>The terminology...
  Space capsule</span><br />

  1
  2
  3
        <p>
        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.
        </p>
      </div> 
    </main>
  )
}