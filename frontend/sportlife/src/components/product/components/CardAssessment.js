import styles from './CardAssessment.module.css'

import {AiFillStar} from 'react-icons/ai'

export default function CardAssessment({star,comment,user}){
	return(
			<div className={styles.assessments}>
				<AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/> <AiFillStar className={styles.star}/>
				<p className={styles.comment}>{comment}</p>
				<p className={styles.username}>{user}</p>
			</div>
	)
}
