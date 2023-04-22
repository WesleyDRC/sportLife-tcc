import styles from './OrderSuccessPage.module.css'

import { useState, useEffect } from "react";

import Confetti from "react-confetti";

import OrderSuccess from '../components/orderSuccess/OrderSuccess'

export default function OrderSuccessPage(){
	const [confetti, setConfetti] = useState(false)

	useEffect(()=>{
		setConfetti(true)
	})
	return(
		<div className={styles.container}>
			<OrderSuccess />
			<div>
        {confetti &&
          <Confetti
						className={styles.size}
            numberOfPieces={1000}
            recycle={false}
            colors={["#317B96", '#FF1493', '#D8BFD8', '#B0E0E6', "#fff", "#000000", '#6A5ACD', '#0000FF', '#708090', '#008B8B', '#006400','#4B0082', '#DAA520']}
          />
        }
      </div>
		</div>
	)
}
