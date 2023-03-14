import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import styles from './PersonalData.module.css'

import useUser from '../../../hooks/useUser'
import useAuth from '../../../hooks/useAuth'

export default function PersonalData(){

	const {user, getInfoUser} = useUser()
	const {authenticated} = useAuth()
	useEffect(() => {
		getInfoUser()
	}, [authenticated])

		return(
			<div>
				<h1>Dados Pessoais</h1>
				<div className={styles.container}>
					<div className={styles.subCont}>
						<div>
							<p className={styles.infoQuest}>Nome</p>
							<p className={`${styles.infoResponse}`}>{user.name}</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Sobrenome</p>
							<p className={`${styles.infoResponse}`}>{user.lastName}</p>
						</div>
					</div>
					<p className={styles.infoQuest}>Email</p>
					<p className={`${styles.infoResponse} ${styles.marginDetail}`}>{user.email}</p>
					<div className={styles.subCont}>
						<div>
							<p className={styles.infoQuest}>CPF</p>
							<p className={`${styles.infoResponse} ${styles.marginDetail}`}>{user.cpf}</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Gênero</p>
							<p className={`${styles.infoResponse} ${styles.marginDetail}`}>{user.gender}</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Data de Nascimento</p>
							<p className={`${styles.infoResponse}`}>{user.dateBirth}</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Telefone</p>
							<p className={`${styles.infoResponse}`}>{user.phone}</p>
						</div>
					</div>
					<Link to='/user/edit'>
						<p className={styles.edit}>EDITAR</p>
					</Link>
					</div>
				</div>
		)
}
