import React from "react";
import styles from "./Home.module.css"

import BarTop from "../components/home/BarTop";
import NavBar from "../components/home/NavBar";

export default function Home(){
	return(
		<div className={styles.container}>
			<BarTop />
			<NavBar />
		</div>
	)
}
