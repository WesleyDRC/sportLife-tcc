import styles from './navigationImage.module.css'

export default function navigationImage(){
	return(
		<div className={styles.container}>
			<p className={styles.title}>Navegue por esportes !</p>
			<div className={styles.photos}>
				<img className={styles.img1} src='https://i.imgur.com/lU9oI6w.png' alt='soccer'/>
				<img className={styles.img2} src='https://i.imgur.com/OZbIsnt.png' alt='basketball'/>
				<img className={styles.img3} src='https://i.imgur.com/gaPtsCX.png' alt='running'/>
				<img className={styles.img4} src='https://i.imgur.com/CV0Xe9h.png' alt='volleyball'/>
			</div>
		</div>
	)
}
