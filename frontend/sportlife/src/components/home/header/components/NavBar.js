import styles from './NavBar.module.css'

import {FaSearch, FaHeart, FaShoppingCart  } from "react-icons/fa";
import {AiOutlineMenu  } from "react-icons/ai";

import {Link} from 'react-router-dom'

import useCart from '../../../../hooks/useCart';
import useBurguer from '../../../../hooks/useBurguer';

import ShoppingCart from './ShoppingCart';
import OptionsBurguer from './OptionsBurguer'

export default function NavBar(){

	const { manupilationCartOpen, openCart } = useCart()
	const { manupilationBurguerOpen, openBurguer } = useBurguer()

	return(
		<div className={styles.container}>
			<div className={styles.navBar}>
				<div>
					<Link className={styles.logo} to= '/'>
						<img src='https://i.imgur.com/BUAhj3p.png' alt='Logo SportLife' />
						<p>SportLife</p>
					</Link>
				</div>
				<div className={styles.navOptions}>
					<p>Masculino</p>
					<p>Feminino</p>
					<p>Esportes</p>
					<p>Novidades</p>
				</div>
				<div className={styles.searchBar}>
					<form action="">
						<input type='text' placeholder='Procurar . . .' />
						<button type='submit'><FaSearch className={styles.searchIcon} /> </button>
					</form>
					<FaHeart className={styles.icons} />
					<FaShoppingCart onClick={manupilationCartOpen} className={styles.icons} />
				</div>
			</div>
			<div className={styles.burguer}>
				<div>
					<Link className={styles.logoMobile} to= '/'>
						<img src='https://i.imgur.com/BUAhj3p.png' alt='Logo SportLife' />
					</Link>
				</div>
				<form action="">
						<input className={styles.searchBarMobile} type='text' placeholder='Procurar . . .' />
						<button className={styles.searchButtonMobile} type='submit'><FaSearch className={styles.searchIconMobile} /> </button>
				</form>
					<AiOutlineMenu onClick={manupilationBurguerOpen} className={styles.burguerIcon} />
			</div>
			{openCart && <ShoppingCart/>}
			{openBurguer && <OptionsBurguer />}
		</div>
	)
}
