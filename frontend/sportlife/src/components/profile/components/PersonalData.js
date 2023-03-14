import { Link } from 'react-router-dom'

import styles from './PersonalData.module.css'

export default function PersonalData(){
		return(
			<div>
				<h1>Dados Pessoais</h1>
				<div className={styles.container}>
					<div className={styles.subCont}>
						<div>
							<p className={styles.infoQuest}>Nome</p>
							<p className={`${styles.infoResponse}`}>Pablin</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Sobrenome</p>
							<p className={`${styles.infoResponse}`}>Bidiaki</p>
						</div>
					</div>
					<p className={styles.infoQuest}>Email</p>
					<p className={`${styles.infoResponse} ${styles.marginDetail}`}>exemplo@gmail.com</p>
					<div className={styles.subCont}>
						<div>
							<p className={styles.infoQuest}>CPF</p>
							<p className={`${styles.infoResponse} ${styles.marginDetail}`}>999.9999.999-99</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Gênero</p>
							<p className={`${styles.infoResponse} ${styles.marginDetail}`}>Masculino</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Data de Nascimento</p>
							<p className={`${styles.infoResponse}`}>01/02/0304</p>
						</div>
						<div>
							<p className={styles.infoQuest}>Telefone</p>
							<p className={`${styles.infoResponse}`}>(12)12345-6789</p>
						</div>
					</div>
					<Link to='/form'>
						<p className={styles.edit}>EDITAR</p>
					</Link>
					</div>
				</div>
		)
}
