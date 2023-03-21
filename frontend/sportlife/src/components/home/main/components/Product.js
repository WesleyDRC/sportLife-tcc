import styles from './Product.module.css'
import {Link} from 'react-router-dom'

export default function Product(props){
	return(
		<Link to={`/product/${props.id}`}>
			<div className={styles.product}>
				<div className={styles.productImg}><img src={props.src} alt="Imagem do produto" /></div>
				<p className={styles.name}>{props.name}</p>
				<p className={styles.price}>{props.price}</p>
			</div>
		</Link>
	)
}
