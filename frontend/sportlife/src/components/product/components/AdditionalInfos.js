import styles from './AdditionalInfos.module.css'

export default function AdditionalInfos(){
	return(
		<div className={styles.container}>
			<div>
				<p>Peso</p>
				<p>110,00G</p>
			</div>
			<hr/>
			<div>
				<p>Dimensões</p>
				<p>1,5 x 18 x 15 cm</p>
			</div>
			<hr/>
			<div>
				<p>Tamanho</p>
				<p>P, M , G, GG</p>
			</div>
			<hr/>
			<div>
				<p>Cor</p>
				<p>Preta</p>
			</div>
			<hr/>
		</div>
	)
}
