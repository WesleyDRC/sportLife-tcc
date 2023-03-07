import styles from "./Home.module.css"

import Header from "../components/home/header/Header";
import Product from "../components/product/Product"

export default function Home(){
	return(
		<div className={styles.container}>
			<Header />
			<Product />
		</div>
	)
}
