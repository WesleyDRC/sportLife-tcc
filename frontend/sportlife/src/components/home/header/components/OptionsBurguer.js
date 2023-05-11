import styles from './OptionsBurguer.module.css'

import useBurguer from '../../../../hooks/useBurguer';

import {Link} from 'react-router-dom'

import {CgClose} from "react-icons/cg";

import useCart from '../../../../hooks/useCart';

export default function OptionsBurguer(){

	const { manupilationCartOpen } = useCart()
	const { setOpenBurguer } = useBurguer()

	function closeBurguer(){
		setOpenBurguer(false);
		document.documentElement.style.overflow = 'auto';
		document.body.scroll = "yes";
	}

	function OpenMobileCart(){
		closeBurguer()
		manupilationCartOpen()
	}

	return(
		<div className={styles.container}>
			<div className={styles.asideBurguer}>
				<header className={styles.headerBurguer}>
					<h2>Navegue pelo site</h2>
					<CgClose onClick={closeBurguer} />
				</header>
				<div className={styles.options}>
					<Link to ='/'><p onClick={closeBurguer}>Home</p></Link>
					<Link to={`/sexo/masculino`}>
						<p onClick={closeBurguer}>Masculino</p>
					</Link>
					<Link to={`/sexo/feminino`}>
						<p onClick={closeBurguer}>Feminino</p>
					</Link>
					<p onClick={closeBurguer}>Esportes</p>
					<p onClick={closeBurguer}>Novidades</p>
					<p onClick={OpenMobileCart}>Meu Carrinho</p>
				</div>
			</div>
		</div>
	)
}
