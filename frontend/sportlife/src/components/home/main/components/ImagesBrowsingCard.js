import styles from './ImagesBrowsingCard.module.css'

import { useNavigate } from 'react-router-dom'

export default function ImagesBrowsingCard(props){
	const navigate = useNavigate()
	return(
		<div className={styles.container} onClick={() => {navigate(`/esporte/${props.sport}`)}}>
			<img src={props.link} />
			<div className={styles.informations}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.descrition}>{props.descrition}</p>
				<p className={styles.button}>Ver Produtos</p>
			</div>
		</div>
	)
}
