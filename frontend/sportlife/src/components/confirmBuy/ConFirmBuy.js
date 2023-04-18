import styles from './ConFirmBuy.module.css';

import CartProduct from './components/CartProduct';
import Summary from './components/Summary';

export default function ConFirmBuy(){
	return(
		<div className={styles.container}>
			<CartProduct />
			<Summary />
		</div>
	)
}
