import styles from './ConFirmBuy.module.css';

import CartProduct from './components/CartProduct';
import Summary from './components/Summary';
import CalcDelivery from './components/CalcDelivery';

export default function ConFirmBuy(){
	return(
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<CartProduct />
				<Summary />
			</div>
			<CalcDelivery />
		</div>
	)
}
