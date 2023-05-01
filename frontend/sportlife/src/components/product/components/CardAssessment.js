import styles from './CardAssessment.module.css'

import {AiFillStar} from 'react-icons/ai'

export default function CardAssessment({star, comment, user, lastName}){
	let starsRender = []
	function stars(){
		for(let i = 0; i < star; i++){
			starsRender.push(<AiFillStar className={styles.star} />);
		}
	}
	stars()
	return(
			<div className={styles.assessments}>
				{starsRender}
				<p className={styles.comment}>{comment}</p>
				<p className={styles.username}>{user}  {lastName}</p>
			</div>
	)
}
