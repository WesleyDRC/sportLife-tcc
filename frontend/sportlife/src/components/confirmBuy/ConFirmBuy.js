import styles from './ConFirmBuy.module.css';
import CartProduct from './components/CartProduct';

export default function ConFirmBuy(){
	return(
		<div className={styles.container}>
			<CartProduct />
		</div>
	)
}
