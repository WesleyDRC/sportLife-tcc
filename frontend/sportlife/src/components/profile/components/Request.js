import styles from './Request.module.css'

import CardOrder from './CardOrder'

export default function Request(){
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>Pedidos</h1>
			<div className={styles.subContainer}>
				<CardOrder />
			</div>
		</div>
	)
}
