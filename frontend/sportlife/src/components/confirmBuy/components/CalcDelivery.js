import styles from './CalcDelivery.module.css'

export default function CalcDelivery(){
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>ENTREGA</h1>
			<label className={styles.labelCep} htmlFor='cep'>CEP</label>
			<input className={styles.inputCep} type='number' id='cep' name='cep' />
			<button className={styles.btnCalc}>CALCULAR</button>
		</div>
	)
}
