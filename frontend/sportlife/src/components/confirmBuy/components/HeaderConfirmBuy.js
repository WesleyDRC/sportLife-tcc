import styles from './HeaderConfirmBuy.module.css'

import { Link } from 'react-router-dom'

export default function HeaderConfirmBuy(){
	return(
		<header className={styles.headerConfirm}>
			<Link className={styles.logo} to= '/'>
				<img src='https://i.imgur.com/BUAhj3p.png' alt='Logo SportLife' />
				<p>SportLife</p>
			</Link>
		</header>
	)
}
