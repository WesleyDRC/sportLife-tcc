import styles from './Summary.module.css';

export default function Summary(){
	return(
		<div className={styles.container}>
			<h2>resumo da compra</h2>
			<div className={styles.subTotal}>
				<p>sub-total</p>
				<p>R$279,99</p>
			</div>
			<div className={styles.delivery}>
				<p>entrega</p>
				<p>R$0,00</p>
			</div>
			<div className={styles.total}>
				<p>total</p>
				<p className={styles.priceTotal}>R$279,00</p>
			</div>
			<button className={styles.firstBtn}>paypal</button>
			<button className={styles.secondBtn}>paypal</button>
		</div>
	)
}
