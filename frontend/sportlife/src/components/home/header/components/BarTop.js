import {Link} from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

import styles from './BarTop.module.css'

export default function BarTop(){
	const { authenticated } = useAuth();

	if(authenticated === false){
		return(
			<div className={styles.container}>
				<Link to="/login">
					Entre
				</Link>
				<Link to="/register">
					Registre-se
				</Link>
			</div>
		)
	}else{
		return(
			<div className={styles.container}>
				<Link to="/profile">
					Minha Conta
				</Link>
			</div>
		)
	}
}
