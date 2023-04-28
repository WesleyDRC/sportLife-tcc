import styles from './Categorypage.module.css'

import Header from '../components/home/header/Header'
import Category from '../components/category/Category'
import Footer from '../components/home/footer/Footer'

import AxiosRepository from '../repository/AxiosRepository'

import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

export default function CategoryPage(){

	const [product, setProducts] = useState()
	let { filter } = useParams();

	useEffect(() => {
    AxiosRepository.findAll({ name: filter })
      .then(resp => {
        setProducts(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
	console.log(product)
	return(
		<div className={styles.container}>
			<Header />
			<Category />
			<Footer />
		</div>
	)
}
