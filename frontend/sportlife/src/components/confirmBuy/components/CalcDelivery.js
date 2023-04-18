import styles from './CalcDelivery.module.css'

export default function CalcDelivery(){
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>Entrega</h1>
			<label className={styles.labelCep} for='cep'>CEP</label>
			<input className={styles.inputCep} type='number' id='cep' name='cep' />
			<button className={styles.btnCalc}>CALCULAR</button>
		</div>
	)
}
