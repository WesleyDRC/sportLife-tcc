import {useState, useRef} from 'react'

import {FaShoppingCart} from "react-icons/fa";

import styles from './ProductInfos.module.css'

export default function ProductInfos(){
	const [amount, setAmout] = useState(0)

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

	return(
		<div className={styles.container}>
			<p className={styles.name}>Camisa Nike SportWear Icon Futura</p>
			<p className={styles.price}>R$49,99</p>
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
