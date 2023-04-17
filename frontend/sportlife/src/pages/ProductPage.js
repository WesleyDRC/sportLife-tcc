import styles from "./ProductPage.module.css"

import Header from "../components/home/header/Header";
import Product from "../components/product/Product"
import Footer from '../components/home/footer/Footer'

import { useParams, useLocation } from "react-router-dom";
import AxiosRepository from "../repository/AxiosRepository";
import { useEffect, useState } from "react";
import ZoomImage from "../components/product/components/ZoomImage";

export default function Home(){
	const [modalZoom, setModalZoom] = useState(false)
	let { id } = useParams();

	useEffect(() => {
    AxiosRepository.updateViewProduct(id);
		window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const pushState = window.history.pushState;
    window.history.pushState = function() {
      pushState.apply(window.history, arguments);
      window.location.reload();
    };
		window.history.scrollRestoration = 'manual';
  }, []);

	if(modalZoom === false){
		return(
			<div className={styles.container}>
				<Header />
				<Product modalZoom={modalZoom} setModalZoom={setModalZoom} />
				<Footer />
			</div>
		)
	}else{
		return(
			<ZoomImage modalZoom={modalZoom} setModalZoom={setModalZoom}  />
		)
	}
}
