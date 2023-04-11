import styles from './OptionsBurguer.module.css'

import useBurguer from '../../../../hooks/useBurguer';

import {Link} from 'react-router-dom'

import {CgClose} from "react-icons/cg";

export default function OptionsBurguer(){

	const { manupilationBurguerClose, setOpenBurguer } = useBurguer()

	function keepContinue(){
		setOpenBurguer(false)
	}

	function closeBurguer(){
		setOpenBurguer(false);
		document.documentElement.style.overflow = 'auto';
		document.body.scroll = "yes";
	}

	return(
		<div className={styles.container}>
			<div className={styles.asideBurguer}>
				<header className={styles.headerBurguer}>
					<h2>Navegue pelo site</h2>
					<CgClose onClick={keepContinue} />
				</header>
				<div className={styles.options}>
					<Link to ='/'><p onClick={closeBurguer}>Home</p></Link>
					<p onClick={closeBurguer}>Masculino</p>
					<p onClick={closeBurguer}>Feminino</p>
					<p onClick={closeBurguer}>Esportes</p>
					<p onClick={closeBurguer}>Novidades</p>
					<p onClick={closeBurguer}>Produtos Salvos</p>
					<p onClick={closeBurguer}>Meu Carrinho</p>
				</div>
			</div>
		</div>
	)
}
