import styles from './Categorypage.module.css'

import Header from '../components/home/header/Header'
import Category from '../components/category/Category'
import Footer from '../components/home/footer/Footer'

import AxiosRepository from '../repository/AxiosRepository'

import Loading from '../components/home/main/components/Loading'

import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

export default function CategoryPage(){

	const [loading, setLoading] = useState(true)
	const [product, setProducts] = useState()
	let { name, esporte } = useParams();

	useEffect(() => {
		setLoading(true)
    AxiosRepository.findAll({ filter: name})
      .then(resp => {
        setProducts(resp.data)
				setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })

			AxiosRepository.findAllTeste({category : esporte })
      .then(resp => {
				console.log(resp)
        setProducts(resp.data)
				setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [name])
	return(
		<div className={styles.container}>
			<Header />
			{!loading ?  <Category products={product} loading={loading} /> : <Loading />}
			<Footer />
		</div>
	)
}
