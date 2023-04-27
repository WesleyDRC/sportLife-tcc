import styles from './Card.module.css'

import {Link} from 'react-router-dom'

export default function Card(props){
	return(
		<div  className={styles.container}>
			<Link to={`/product/${props.id}`}>
				<div className={styles.card}>
					<img src={props.src} alt='Foto do produto' />
					<p className={styles.name}>{props.name}</p>
					<p className={styles.category}>{props.category}</p>
					<p className={styles.price}>{props.price} </p>
				</div>
			</Link>
		</div>
	)
}
