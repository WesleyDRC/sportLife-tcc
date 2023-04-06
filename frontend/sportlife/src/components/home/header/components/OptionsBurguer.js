import styles from './OptionsBurguer.module.css'

import {CgClose} from "react-icons/cg";

import { Link } from 'react-router-dom';

export default function OptionsBurguer(){
	return(
		<div className={styles.container}>
			<Link to='/'>
				<CgClose className={styles.closeButton}/>
			</Link>
			<p className={`${styles.options} ${styles.firstOption}`}>Masculino</p>
			<p className={styles.options}>Feminino</p>
			<p className={styles.options}>Esportes</p>
			<p className={styles.options}>Novidades</p>
			<p className={styles.options}>Produtos Salvos</p>
			<p className={styles.options}>Meu Carrinho</p>
		</div>
	)
}
