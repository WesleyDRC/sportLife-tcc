import styles from './Product.module.css'

export default function Product(props){
	return(
		<div className={styles.container}>
				<div className={styles.product}>
					<img src={props.src} />
					<p>{props.name}</p>
				</div>
		</div>
	)
}
