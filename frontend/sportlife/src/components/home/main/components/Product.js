import styles from './Product.module.css'
import {Link} from 'react-router-dom'

export default function Product(props){
	return(
		<Link to={`/product/${props.id}`}>
			<div className={styles.product}>
				<img src={props.src} alt="Imagem do produto" />
				<p className={styles.name}>{props.name}</p>
				<p className={styles.price}>{props.price}</p>
			</div>
		</Link>
	)
}
