import {Link} from 'react-router-dom'

import styles from './NavBar.module.css'

export default function NavBar(props){
		let manipulation = [props.personalData, props.address,props.request ]
	return(
		<div className={styles.container}>
				<div className={styles.subContainer}>
					<div className={styles.userPhoto}>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='Foto do user' />
						<p>Olá, Pablin !</p>
					</div>
					<p className={styles.optionMargin}><Link className={manipulation[0]? styles.select : styles.options} to="/personaldata">Dados Pessoais</Link></p>
					<p className={styles.optionMargin}><Link className={manipulation[1]? styles.select : styles.options} to="/address">Endereços</Link></p>
					<p className={styles.optionMargin}><Link className={manipulation[2]? styles.select : styles.options} to="/request">Pedidos</Link></p>
					<p className={styles.optionMargin}><Link className={styles.options} to="/exit">Sair</Link></p>
				</div>
		</div>
	)

}
