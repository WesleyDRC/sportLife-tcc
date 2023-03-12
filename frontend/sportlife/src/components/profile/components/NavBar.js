import { useRef, useState } from 'react'
import {Link} from 'react-router-dom'

import styles from './NavBar.module.css'


export default function NavBar(){

	const personal = useRef()
	const address = useRef()
	const requests = useRef()

	const [personalSel, setPersonalSel] = useState(true)
	const [addressSel, setAddressSel] = useState(false)
	const [requestSel,setRequestSel] = useState(false)

	function personalClick(){
		setPersonalSel(true)
		setAddressSel(false)
		setRequestSel(false)
	}

	function addressClick(){
		setPersonalSel(false)
		setAddressSel(true)
		setRequestSel(false)
	}

	function requestsClick(){
		setPersonalSel(false)
		setAddressSel(false)
		setRequestSel(true)
	}

	return(
		<div className={styles.container}>
				<div className={styles.subContainer}>
					<div className={styles.userPhoto}>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='Foto do user' />
						<p>Olá, Pablin !</p>
					</div>
					<p ref={personal} onClick={personalClick}  className={styles.optionMargin}  ><Link  className={personalSel? styles.select : styles.options} to="/personaldata">Dados Pessoais</Link></p>
					<p ref={address} onClick={addressClick} className={styles.optionMargin}><Link className={addressSel? styles.select : styles.options} to="/address">Endereços</Link></p>
					<p ref={requests} onClick={requestsClick} className={styles.optionMargin}><Link className={requestSel? styles.select : styles.options} to="/request">Pedidos</Link></p>
					<p className={styles.optionMargin}><Link className={styles.options} to="/exit">Sair</Link></p>
				</div>
		</div>
	)

}
