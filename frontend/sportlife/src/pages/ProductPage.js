import styles from "./Home.module.css"

import Header from "../components/home/header/Header";
import Product from "../components/product/Product"
import Footer from '../components/home/footer/Footer'


export default function Home(){
	return(
		<div className={styles.container}>
			<Header />
			<Product />
			<Footer />
		</div>
	)
}