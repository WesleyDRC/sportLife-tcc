import styles from './NavigationBrand.module.css'

export default function NavigationBrand(){
	return(
		<div className={styles.container}>
			<p className={styles.title}>Navegue por marcas</p>
			<div className={styles.photosContainer}>
				<img className={styles.logo} src='https://i.imgur.com/LkO860L.png' alt='Logo Puma'/>
				<img className={styles.logo} src='https://i.imgur.com/wAYQLwf.png' alt='Logo Fila'/>
				<img className={styles.logo} src='https://i.imgur.com/Z48eiIA.png' alt='Logo Mizuno'/>
				<img className={styles.logo} src='https://i.imgur.com/jQogHUN.png' alt='Logo Nike'/>
				<img className={styles.logo} src='https://i.imgur.com/928xw6j.png' alt='Logo Asics'/>
				<img className={styles.logo} src='https://i.imgur.com/dCoxQpf.png' alt='Logo Wilson'/>
				<img className={styles.logo} src='https://i.imgur.com/OCqxTH0.png' alt='Logo Adidas'/>
			</div>
			<div className={styles.containerCards}>
				<img src='https://i.imgur.com/0Lq4onL.png' alt='Card Puma'/>
				<img src='https://i.imgur.com/v5BiuP5.png' alt='Card Nike'/>
				<img src='https://i.imgur.com/4LAS4h7.png' alt='Card Adidas'/>
			</div>
		</div>
	)
}
