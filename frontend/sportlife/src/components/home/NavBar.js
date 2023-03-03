import styles from './NavBar.module.css'
import {FaSearch} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
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
				<p>03 Por R$99</p>
				<p>Acessórios</p>
				<p>Lançamentos</p>
				<p>Kits</p>
			</div>
			<div>
				<FaSearch className={styles.icons} />
				<FaHeart className={styles.icons} />
				<FaUserAlt className={styles.icons} />
				<FaShoppingCart className={styles.icons} />
			</div>
		</div>
	)
}
