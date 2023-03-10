import { useState, useRef } from 'react'

import styles from './NavBar.module.css'
import Render from './Render'

export default function NavBar(){

	const [page, setPage] = useState('personal')

	const personal = useRef()
	const address = useRef()
	const requests = useRef()
	const exit = useRef()

	function personalClick(){
		personal.current.className ='select'
		setPage('personal')
	}

	function addressClick(){
		setPage('address')
	}

	function requestsClick(){
		setPage('requests')
	}

	function exitClick(){
		setPage('exit')
	}

	return(
		<div className={styles.container}>
				<div className={styles.subContainer}>
					<div className={styles.userPhoto}>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='Foto do user' />
						<p>Olá, Pablin !</p>
					</div>
					<p ref={personal} onClick={personalClick} className={styles.options }>Dados Pessoais</p>
					<p ref={address} onClick={addressClick} className={styles.options}>Endereços</p>
					<p ref={requests} onClick={requestsClick} className={styles.options}>Pedidos</p>
					<p ref={exit} onClick={exitClick} className={styles.options}>Sair</p>
				</div>
				<Render page={page} />
		</div>
	)

}
