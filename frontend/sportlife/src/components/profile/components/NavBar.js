import {Link} from 'react-router-dom'

import styles from './NavBar.module.css'

import useUser from '../../../hooks/useUser'

export default function NavBar(props){

	const { user } = useUser();

	let manipulation = [props.personalData, props.address,props.request ]

	return(
		<div className={styles.container}>
				<div className={styles.subContainer}>
					<div className={styles.userPhoto}>
						<img src='https://i.imgur.com/YDW4WL9.png' alt='Foto do user' />
						{ user.firstName ? (
							<p>Olá, {user.firstName} !</p>
						): <p>Olá!</p>}

					</div>
					<div className={styles.optionsNavigate}>
						<p className={styles.optionMargin}><Link className={manipulation[0]? styles.select : styles.options} to="/user/personaldata">Dados Pessoais</Link></p>
						<p className={styles.optionMargin}><Link className={manipulation[1]? styles.select : styles.options} to="/user/address">Endereços</Link></p>
						<p className={styles.optionMargin}><Link className={manipulation[2]? styles.select : styles.options} to="/user/request">Pedidos</Link></p>
						<p className={styles.optionMargin}><Link className={styles.options} to="/user/exit">Sair</Link></p>
					</div>
				</div>
		</div>
	)

}
