import styles from "./OrderSuccess.module.css";

import { useState, useEffect } from "react";

import Confetti from "react-confetti";

export default function OrderSuccess() {
	const [confetti, setConfetti] = useState(false)
	useEffect(()=>{
		//setConfetti(true)
	})
  return (
    <div className={styles.container}>
			<div className={styles.subContainer}>

			</div>
      <div>
        {confetti &&
          <Confetti
            numberOfPieces={500}
            recycle={false}
            colors={["#317B96", '#FF1493', '#D8BFD8', '#B0E0E6', "#fff", "#000000", '#6A5ACD', '#0000FF', '#708090', '#008B8B', '#006400','#4B0082', '#DAA520']}
          />
        }
      </div>
    </div>
  );
}
