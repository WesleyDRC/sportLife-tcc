import styles from './AddComment.module.css'

import {AiFillStar} from 'react-icons/ai'

import { useState } from 'react'

import useComment from '../../../hooks/useComment'

export default function AddComment(){

	const {manupilationCommentClose} = useComment()
	const [amountStars,setamountStars] = useState(0)

	function oneStar(){
		setamountStars(1)
	}

	function twoStar(){
		setamountStars(2)
	}

	function threeStar(){
		setamountStars(3)
	}

	function fourStar(){
		setamountStars(4)
	}

	function fiveStar(){
		setamountStars(5)
	}

	return(
		<div className={styles.container}>
			<h1 className={styles.title}>Adicione um Comentario</h1>
			<div className={styles.stars}>
				<AiFillStar className={amountStars >= 1? styles.starsGold : styles.normalStar} onClick={oneStar}/>
				<AiFillStar className={amountStars >= 2? styles.starsGold : styles.normalStar} onClick={twoStar}/>
				<AiFillStar className={amountStars >= 3? styles.starsGold : styles.normalStar} onClick={threeStar}/>
				<AiFillStar className={amountStars >= 4? styles.starsGold : styles.normalStar} onClick={fourStar}/>
				<AiFillStar className={amountStars == 5? styles.starsGold : styles.normalStar} onClick={fiveStar}/>
			</div>
			<textarea className={styles.comment} maxLength='255'/>
			<div className={styles.buttons}>
				<button onClick={manupilationCommentClose} className={styles.cancelButton}>Cancelar</button>
				<button className={styles.sendButton}>Enviar</button>
			</div>
		</div>
	)
}
