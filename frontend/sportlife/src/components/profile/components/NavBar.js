import styles from './NavBar.module.css'
import './NavBar.module.css'

export default function NavBar(){

	const personal = document.getElementById('personal')
	const address = document.getElementById('address')
	const requests = document.getElementById('requests')
	const exit = document.getElementById('exit')

	function personalClick(){
		personal.classList.add("select")
		address.classList.remove("select")
		requests.classList.remove("select")
		exit.classList.remove("select")
	}

	function addressClick(){
		personal.classList.remove("select")
		address.classList.add("select")
		requests.classList.remove("select")
		exit.classList.remove("select")
	}

	function requestsClick(){
		personal.classList.remove("select")
		address.classList.remove("select")
		requests.classList.add("select")
		exit.classList.remove("select")
	}

	function exitClick(){
		personal.classList.remove("select")
		address.classList.remove("select")
		requests.classList.remove("select")
		exit.classList.add("select")
	}

	return(
		<div className={styles.container}>
				<div className={styles.userPhoto}>
					<img src='https://i.imgur.com/MC3pcrf.png' alt='Foto do user' />
					<p>Olá, Pablin !</p>
				</div>
				<p id="personal" onClick={personalClick} className={styles.options}>Dados Pessoais</p>
				<p id="address" onClick={addressClick} className={styles.options}>Endereços</p>
				<p id="requests" onClick={requestsClick} className={styles.options}>Pedidos</p>
				<p id="exit" onClick={exitClick} className={styles.options}>Sair</p>
		</div>
	)
}
