import styles from './Assessments.module.css'
import { AiFillStar } from 'react-icons/ai';

export default function Assessments(){
	return(
		<div className={styles.container}>
			<h1>Avaliações dos Clientes(1)</h1>
			<div className={styles.assessments}>
				<AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/>
				<p className={styles.comment}>Otimo produto, produto identico a foto sem duvidas irei retornar ao site para efetuar mais compras !</p>
				<p className={styles.username}>Wesley</p>
			</div>
		</div>
	)
}
