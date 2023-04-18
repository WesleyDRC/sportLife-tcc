import styles from './Summary.module.css';

export default function Summary(){
	return(
		<div className={styles.container}>
			<h2>resumo da compra</h2>
			<div>
				<p>sub-total</p>
				<p>R$279,99</p>
			</div>
			<div>
				<p>entrega</p>
				<p>R$0,00</p>
			</div>
			<div>
				<p>total</p>
				<p>R$279,00</p>
			</div>
			<button>paypal</button>
			<button>paypal</button>
		</div>
	)
}
