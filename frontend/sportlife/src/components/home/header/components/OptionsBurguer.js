import styles from './OptionsBurguer.module.css'

import useBurguer from '../../../../hooks/useBurguer';

import {CgClose} from "react-icons/cg";

export default function OptionsBurguer(){

	const { manupilationBurguerClose, setOpenBurguer } = useBurguer()

	function keepContinue(){
		window.location.reload()
		setOpenBurguer(false)
	}
	return(
		<div className={styles.container}>
			<div className={styles.asideBurguer}>
				<header className={styles.headerBurguer}>
					<h2>Navegue pelo site</h2>
					<CgClose onClick={keepContinue} />
				</header>
				<div className={styles.options}>
					<p>Masculino</p>
					<p>Feminino</p>
					<p>Esportes</p>
					<p>Novidades</p>
					<p>Produtos Salvos</p>
					<p>Meu Carrinho</p>
				</div>
			</div>
		</div>
	)
}
