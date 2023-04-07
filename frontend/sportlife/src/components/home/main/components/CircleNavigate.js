import styles from './CircleNavigate.module.css'

export default function CircleNavigate(){
return(
		<div className={styles.container}>
			<p className={styles.title}>NAVEGUE POR ESPORTES</p>
			<div className={styles.subContainer}>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/QBr9BCS.jpg' alt='esporte 1'/>
					<p>Futebol</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/dSAF8hK.jpg' alt='esporte 2'/>
					<p>Basquete</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/lfMWtfX.jpg' alt='esporte 3'/>
					<p>Vôlei</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/9qfzx5O.jpg' alt='esporte 4'/>
					<p>Natação</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/BLDARkF.jpg' alt='esporte 5'/>
					<p>Corrida</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/65ofIGz.jpg' alt='esporte 6'/>
					<p>Tênis</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/yRFdQ73.png' alt='esporte 7'/>
					<p>Futsal</p>
				</div>
				<div className={styles.sport}>
					<img src='https://i.imgur.com/CfuFQFN.jpg' alt='esporte 8'/>
					<p>Lutas</p>
				</div>
			</div>
		</div>
	)
}
