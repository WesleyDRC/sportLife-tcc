import styles from './CircleNavigate.module.css'

import { useNavigate } from 'react-router-dom';

export default function CircleNavigate(){

	const navigate = useNavigate();

	function teste(){
		navigate(`/esporte/futebol`)
	}

	function teste2(){
		navigate(`/esporte/basquete`)
	}

	function teste3(){
		navigate(`/esporte/volei`)
	}

return(
		<div className={styles.container}>
			<p className={styles.title}>NAVEGUE POR ESPORTES</p>
			<div className={styles.subContainer}>
				<div className={styles.sport}>
					<img onClick={teste} src='https://i.imgur.com/QBr9BCS.jpg' alt='esporte 1'/>
					<p>Futebol</p>
				</div>
				<div className={styles.sport}>
					<img onClick={teste2} src='https://i.imgur.com/dSAF8hK.jpg' alt='esporte 2'/>
					<p>Basquete</p>
				</div>
				<div className={styles.sport}>
					<img onClick={teste3} src='https://i.imgur.com/lfMWtfX.jpg' alt='esporte 3'/>
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
