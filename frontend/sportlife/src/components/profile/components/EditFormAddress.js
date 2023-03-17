import styles from './EditFormAddress.module.css'

export default function FormAddress(){
	return(
		<div className={styles.container}>
			<h1>Adicione seu endereço !</h1>
			<div className={styles.subContainer}>
				<form >
					<div>
						<div>
							<label for='cep'>CEP</label>
							<input
								id='cep'
								placeholder='Digite seu CEP'
							/>
							</div>
							<div>
								<label for='road'>Rua</label>
								<input
									id='road'
									placeholder='Digite sua rua'
								/>
							</div>
					</div>
					<div>
						<div>
							<label for='neighborhood'>Bairro</label>
							<input
								id='neighborhood'
								placeholder='Digite seu Bairro'
							/>
						</div>
						<div>
							<label for='number'>Número</label>
							<input
								id='number'
								placeholder='Digite seu numero'
							/>
						</div>
					</div>
					<label for='complement'>Complemento</label>
					<input
						id='complement'
						placeholder='Digite seu complemento'
					/>
					<div className={styles.positionButton}>
										<button type="submit" className={styles.button}>Salvar</button>
									</div>
				</form>
			</div>
		</div>
	)
}
