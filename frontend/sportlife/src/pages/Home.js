import styles from "./Home.module.css"

import Header from "../components/home/header/Header";
import Main from "../components/home/main/Main";
import Footer from "../components/home/footer/Footer";

export default function Home(){
	return(
		<div className={styles.container}>
			<Header />
			<Main />
		</div>
	)
}
