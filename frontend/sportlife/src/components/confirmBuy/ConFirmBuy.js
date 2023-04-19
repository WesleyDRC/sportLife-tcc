import styles from './ConFirmBuy.module.css';

import CardProduct from './components/CardProduct';
import Summary from './components/Summary';
import CalcDelivery from './components/CalcDelivery';

export default function ConFirmBuy(){
	return(
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div className={styles.cardProduct}>
					<CardProduct />
				</div>
				<div className={styles.sumary}>
					<Summary />
				</div>
				<div className={styles.calcDelivery}>
					<CalcDelivery />
				</div>
			</div>
		</div>
	)
}
