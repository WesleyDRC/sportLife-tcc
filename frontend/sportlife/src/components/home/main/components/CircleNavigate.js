import styles from './CircleNavigate.module.css'

import { useNavigate } from 'react-router-dom';

export default function CircleNavigate(){

	const navigate = useNavigate();

	function fut(){
		navigate(`/esporte/futebol`)
	}

	function basq(){
		navigate(`/esporte/basquete`)
	}

	function vol(){
		navigate(`/esporte/volei`)
	}

	function natacao(){
		navigate(`/esporte/natacao`)
	}

	function corrida(){
		navigate(`/esporte/corrida`)
	}

	function tenis(){
		navigate(`/esporte/tenis`)
	}

	function futsal(){
		navigate(`/esporte/futsal`)
	}

	function lutas(){
		navigate(`/esporte/lutas`)
	}

return(
		<div className={styles.container}>
			<p className={styles.title}>NAVEGUE POR ESPORTES</p>
			<div className={styles.subContainer}>
				<div className={styles.sport}>
					<img onClick={fut} src='https://i.imgur.com/QBr9BCS.jpg' alt='esporte 1'/>
					<p>Futebol</p>
				</div>
				<div className={styles.sport}>
					<img onClick={basq} src='https://i.imgur.com/dSAF8hK.jpg' alt='esporte 2'/>
					<p>Basquete</p>
				</div>
				<div className={styles.sport}>
					<img onClick={vol} src='https://i.imgur.com/lfMWtfX.jpg' alt='esporte 3'/>
					<p>Vôlei</p>
				</div>
				<div className={styles.sport}>
					<img onClick={natacao} src='https://i.imgur.com/9qfzx5O.jpg' alt='esporte 4'/>
					<p>Natação</p>
				</div>
				<div className={styles.sport}>
					<img onClick={corrida} src='https://i.imgur.com/BLDARkF.jpg' alt='esporte 5'/>
					<p>Corrida</p>
				</div>
				<div className={styles.sport}>
					<img onClick={tenis} src='https://i.imgur.com/65ofIGz.jpg' alt='esporte 6'/>
					<p>Tênis</p>
				</div>
				<div className={styles.sport}>
					<img onClick={futsal} src='https://i.imgur.com/yRFdQ73.png' alt='esporte 7'/>
					<p>Futsal</p>
				</div>
				<div className={styles.sport}>
					<img onClick={lutas} src='https://i.imgur.com/CfuFQFN.jpg' alt='esporte 8'/>
					<p>Lutas</p>
				</div>
			</div>
		</div>
	)
}
