import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "./index.module.scss";
import bgStyles from "../styles/backgrounds.module.scss";
import globalStyles from "../App.module.scss";

export const Home = () => {
	return (
		<main className={`${bgStyles.homeBG} ${bgStyles.bgSize}`}>
			<NavBar />

			<div className={styles.contentContainer}>
				<section className={styles.description}>
					<span className={globalStyles.heading5}>
						SO, YOU WANT TO TRAVEL TO
					</span>

					<div className={styles.spaceMargin}>
						<span className={globalStyles.heading1}>SPACE</span>
					</div>

					<p className={globalStyles.textContent}>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</section>

				<div className={styles.exploreContainer}>
					<a className={styles.exploreLink} href="/destination">
						EXPLORE
					</a>
				</div>
			</div>
		</main>
	);
};
