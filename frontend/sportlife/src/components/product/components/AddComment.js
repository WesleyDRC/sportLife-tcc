import styles from './AddComment.module.css'

import {AiFillStar} from 'react-icons/ai'

import { useState } from 'react'

import useComment from '../../../hooks/useComment'

import AxiosRepository from '../../../repository/AxiosRepository'

export default function AddComment(props){

	const {manupilationCommentClose} = useComment()
	const [amountStars,setAmountStars] = useState(0)
	const [text, setText] = useState('');

	function oneStar(){
		setAmountStars(1)
	}

	function twoStar(){
		setAmountStars(2)
	}

	function threeStar(){
		setAmountStars(3)
	}

	function fourStar(){
		setAmountStars(4)
	}

	function fiveStar(){
		setAmountStars(5)
	}

	function handleChange(event) {
    setText(event.target.value);
  }

	function sendComment(){
		AxiosRepository.addComment({productId: props.id, stars: amountStars, assessment: text }).then(() => window.location.reload())
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
			<textarea value={text} onChange={handleChange} className={styles.comment} maxLength='255'/>
			<div className={styles.buttons}>
				<button onClick={manupilationCommentClose} className={styles.cancelButton}>Cancelar</button>
				<button onClick={sendComment} className={styles.sendButton}>Enviar</button>
			</div>
		</div>
	)
}
