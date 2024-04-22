import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header/Header";
import styles from './index.module.scss';

const App = () => {
  return (
    <main className={styles.homeBackground}>
      <Header />
      <div className={styles.description}>
        SO, YOU WANT TO TRAVEL TO<br />
        <span>SPACE</span><br />
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
        </p>
      </div>

      <button className={styles.exploreButton}>EXPLORE</button>  
    </main>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
