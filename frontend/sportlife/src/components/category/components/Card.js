import styles from './Card.module.css'
import {useState} from 'react'

export default function Card(props){

	const [buttonView, setButtonView] = useState(false)

	function buttonVisible(){
		setButtonView(true)
	}

	function buttonNotVisible(){
		setButtonView(false)
	}

	return(
		<div  className={styles.container}>
			<div onMouseOver={buttonVisible} onMouseOut={buttonNotVisible} className={styles.card}>
				<img src={props.link} alt='Foto do produto' />
				<p className={styles.name}>{props.name}</p>
				<p className={styles.price}>R${props.price} </p>
				<div className={styles.positionButton}>
					<button className={buttonView ? styles.buy : styles.buyNone}>Adicionar ao carrinho</button>
				</div>
			</div>
		</div>
	)
}
