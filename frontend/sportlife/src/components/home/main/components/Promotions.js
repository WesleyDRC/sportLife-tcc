import styles from './Promotions.module.css'

export default function Promotions(){
return(
		<div className={styles.container}>
			<img src='https://i.imgur.com/9NmdOw7.png' alt='Promoção 1' />
			<img className={styles.teste} src='https://i.imgur.com/UTxdAtv.png' alt='Promoção 2' />
			<img src='https://i.imgur.com/xzYQRwu.png' alt='Promoção 3' />
		</div>
	)
}
