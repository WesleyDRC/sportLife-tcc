import styles from "./Home.module.css"

import Header from "../components/home/header/Header";
import Product from "../components/product/Product"
import Footer from '../components/home/footer/Footer'

import { useParams } from "react-router-dom";
import AxiosRepository from "../repository/AxiosRepository";
import { useEffect } from "react";

export default function Home(){
		let { id } = useParams();

	useEffect(() => {
    AxiosRepository.updateViewProduct(id)
  }, [id]);
	return(
		<div className={styles.container}>
			<Header />
			<Product />
			<Footer />
		</div>
	)
}
