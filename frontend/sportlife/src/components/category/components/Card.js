import styles from './Card.module.css'

export default function Card(props){
	return(
		<div className={styles.container}>
			<div>
				<img src={props.link} alt='Foto do produto' />
				<p>{props.name}</p>
				<p>{props.price} </p>
			</div>
		</div>
	)
}
