import styles from './Address.module.css'

import {Link} from 'react-router-dom'

export default function Address(){
	return(
		<div className={styles.container}>
			<h1>Endereço</h1>
			<div className={styles.subContainer}>
				<div className={styles.display}>
					<div>
						<p className={styles.quest}>CEP</p>
						<p  className={styles.res}>12222222</p>
					</div>
					<div>
						<p className={styles.quest}>Rua</p>
						<p  className={styles.res}>Rua maneirinha</p>
					</div>
				</div>
				<div className={styles.display}>
					<div>
						<p className={styles.quest}>Bairro</p>
						<p  className={styles.res}>Bairro maneirinho</p>
					</div>
					<div>
						<p className={styles.quest}>Numero</p>
						<p  className={styles.res}>190</p>
					</div>
				</div>
				<p className={styles.quest}>Complemento</p>
				<p className={styles.res}>Casa</p>
				<Link to="/user/editAddress">
					<p className={styles.edit}>EDITAR</p>
				</Link>
			</div>
		</div>
	)
}
