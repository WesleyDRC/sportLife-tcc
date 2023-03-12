import styles from './Exit.module.css'

import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

export default function Exit(){
	const navigate = useNavigate()
	const {SignOut} = useAuth()

	const logout = () => {
    SignOut()
    navigate("/")
  }
	return(
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<h1 className={styles.quest}>Tem certeza que deseja sair ?</h1>
				<div className={styles.buttons}>
					<button className={styles.backButton}><Link to="/personaldata">Voltar</Link></button>
					<button className={styles.exitButton} onClick={logout}>Sair</button>
				</div>
			</div>
		</div>
	)
}
