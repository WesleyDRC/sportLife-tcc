import styles from './NavBar.module.css'
import {FaSearch} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";

export default function NavBar(){
	return(
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src='https://i.imgur.com/BUAhj3p.png' alt='Logo SportLife' />
				<p>SportLife</p>
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
				<FaShoppingCart className={styles.icons} />
			</div>
		</div>
	)
}
