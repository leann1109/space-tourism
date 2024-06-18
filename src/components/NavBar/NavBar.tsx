import React from "react";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
	return (
		<nav>
			<div className={`${styles.navbar} ${styles.navText}`}>
				<div className={styles.navbarLogo}>
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
						<g fill="none" fill-rule="evenodd">
							<circle cx="24" cy="24" r="24" fill="#FFF" />
							<path
								fill="#0B0D17"
								d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
							/>
						</g>
					</svg>
				</div>

				<div className={styles.navbarLine}></div>

				<div className={styles.linksContainer}>
					<ul>
						<a className={styles.links} href="/">
							<div>
								<li>
									<strong>00 </strong>HOME
								</li>
							</div>
						</a>
						<a className={styles.links} href="/destination">
							<div>
								<li>
									<strong>01 </strong>DESTINATION
								</li>
							</div>
						</a>
						<a className={styles.links} href="/crew">
							<div>
								<li>
									<strong>02 </strong>CREW
								</li>
							</div>
						</a>
						<a className={styles.links} href="/technology">
							<div>
								<li>
									<strong>03 </strong>TECHNOLOGY
								</li>
							</div>
						</a>
					</ul>
				</div>
			</div>
		</nav>
	);
};
