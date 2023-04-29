import styles from './CardOrder.module.css'

import {ImTruck} from 'react-icons/im'

export default function CardOrder(){
	return(
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<img src='https://imgnike-a.akamaihd.net/768x768/024315ID.jpg' alt='imagem produto' />
				<div className={styles.infosContainer}>
					<div className={styles.infos}>
						<p className={styles.name}>2x Camisa das braba</p>
						<p>Size:M</p>
						<p>49,99</p>
					</div>
					<div className={styles.status}>
						<div>
							<ImTruck />
							<p>ENTREGUE</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
