import styles from './Product.module.css'

export default function Product(props){
	return(
		<div className={styles.product}>
			<img src={props.src} alt="Imagem do produto" />
			<p className={styles.name}>{props.name}</p>
			<p className={styles.price}>{props.price}</p>
		</div>
	)
}
