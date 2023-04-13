import {useState, useRef, useEffect} from 'react'

import {FaShoppingCart} from "react-icons/fa";

import styles from './ProductInfos.module.css'

import AxiosRepository from '../../../repository/AxiosRepository';

import priceBRL from '../../../utils/formatPrice'

import { useParams } from "react-router-dom";

export default function ProductInfos(){
	let [amount, setAmout] = useState(1)
	const [product, setProduct] = useState([]);
	let { id } = useParams();


	// var tamanhos = tam.split(",")

	const subtract = useRef()
	const add = useRef()

	const addOne = () => {
		setAmout(amount + 1)
	}

	const subOne = () => {
		if(amount === 1){
			setAmout(amount = 1)
		}else{
			setAmout(amount -1)
		}
	}

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
			let tam = product.sizes;
			console.log(tam)
    });
  }, [id]);

	return(
		<div className={styles.container}>
			<p className={styles.name}>{product.name}</p>
			<p className={styles.price}>{priceBRL(product ? product.price : '0')}</p>
			<p className={styles.color}>Cores</p>
			<div className={styles.teste} style={{backgroundColor:product.colors}} ></div>
			<p className={styles.size}>Tamanhos</p>
			<p className={styles.availableSizes}>{}</p>
			<div className={styles.counterAndBuy} >
				<div className={styles.counter}>
					<button ref={subtract} className={styles.sub} onClick={subOne}>-</button>
					<p className={styles.amount}>{amount}</p>
					<button ref={add} className={styles.add} onClick={addOne}>+</button>
				</div>
			</div>
			<button className={styles.addCar}> <FaShoppingCart /><span>Adicionar ao carrinho</span></button>
		</div>
	)
}
