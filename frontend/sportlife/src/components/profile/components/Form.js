import styles from './Form.module.css'

export default function Form(){
	return(
		<div>
			<h1>Adicione seus dados !</h1>
			<div className={styles.container}>
				<form>
					<div className={styles.subContainer}>
						<div >
							<label>Nome</label>
							<input type="text" placeholder='Digite seu nome'/>
						</div>
						<div>
							<label for='lastName'>Sobrenome</label>
							<input id='lastName' type="text" placeholder='Digite seu sobrenome'/>
						</div>
					</div>
					<label for='email'>Email</label>
					<input id='email' type="text" placeholder="Digite seu email" />
					<div className={styles.subContainer}>
						<div>
							<label for='CPF'>CPF</label>
							<input id='CPF' type="text" placeholder='Digite seu CPF'/>
						</div>
						<div>
							<label for='sex'>Gênero</label>
							<input id='sex' type="text" placeholder='Digite seu gênero'/>
						</div>
					</div>
					<div className={styles.subContainer}>
						<div>
							<label for='date'>Data de nascimento</label>
							<input id='date' type="date" />
						</div>
						<div>
							<label for='celNumber'>Número de celular</label>
							<input id='celNumber' type="number" placeholder='Digite seu celular'/>
						</div>
					</div>
				</form>
				<div className={styles.positionButton}>
					<button className={styles.button}>Salvar</button>
				</div>
			</div>
		</div>
	)
}
