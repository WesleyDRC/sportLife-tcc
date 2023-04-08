import styles from './ImagesBrowsingCard.module.css'

export default function ImagesBrowsingCard(props){
	return(
		<div className={styles.container}>
			<img src={props.link} />
			<div className={styles.informations}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.descrition}>{props.descrition}</p>
				<p className={styles.button}>Ver Produtos</p>
			</div>
		</div>
	)
}
