import {useState, useRef, useEffect} from 'react'

import {FaShoppingCart} from "react-icons/fa";

import styles from './ProductInfos.module.css'

import AxiosRepository from '../../../repository/AxiosRepository';

import priceBRL from '../../../utils/formatPrice'

import { useParams } from "react-router-dom";

export default function ProductInfos(){
	const [amount, setAmout] = useState(0)
	const [product, setProduct] = useState([]);
	let { id } = useParams();

	const subtract = useRef()
	const add = useRef()

	const addOne = () => {
		setAmout(amount + 1)
	}

	const subOne = () => {
		if(amount === 0){
			setAmout(amount = 0)
		}else{
			setAmout(amount - 1)
		}
	}

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
    });
  }, []);

	return(
		<div className={styles.container}>
			<p className={styles.name}>{product.name}</p>
			<p className={styles.price}>{priceBRL(product ? product.price : '0')}</p>
			<p className={styles.color}>Cor</p>

			<p className={styles.size}>Tamanhos</p>

			<div className={styles.counterAndBuy}>
				<div className={styles.counter}>
					<button ref={subtract} className={styles.sub} onClick={subOne}>-</button>
					<p className={styles.amount}>{amount}</p>
					<button ref={add} className={styles.add} onClick={addOne}>+</button>
				</div>
					<button className={styles.buy}>Comprar</button>
			</div>
			<button className={styles.addCar}> <FaShoppingCart /><span>Adicionar ao carrinho</span></button>
		</div>
	)
}
