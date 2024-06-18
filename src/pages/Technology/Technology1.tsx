import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import bgStyles from "../../styles/backgrounds.module.scss";

export const Technology1 = () => {
  return (
    <main className={`${bgStyles.technologyBG} ${bgStyles.bgSize}`}>
      <NavBar />
      <div>
      03 Space launch 101<br />
        <span>The terminology...
  Launch vehicle</span><br />

  1
  2
  3
        <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!
        </p>
      </div> 
    </main>
  )
}