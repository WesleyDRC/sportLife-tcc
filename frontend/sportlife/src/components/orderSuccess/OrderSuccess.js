import styles from "./OrderSuccess.module.css";

import { useState, useEffect } from "react";

import Confetti from "react-confetti";

import useUser from "../../hooks/useUser";

import { Link } from "react-router-dom";

import { FaRegCheckCircle } from 'react-icons/fa'

export default function OrderSuccess() {

	const { user } = useUser();

	const [confetti, setConfetti] = useState(false)
	useEffect(()=>{
		setConfetti(true)
	})
  return (
    <div className={styles.container}>
			<div className={styles.subContainer}>
				<div className={styles.checkCircle}>
					<FaRegCheckCircle />
				</div>
				<div className={styles.infos}>
					<h1>pagamento aprovado !</h1>
					<img src='https://i.imgur.com/7WIlAHG.png' />
					<p>{user.firstName} {user.lastName},</p>
					<p>Obrigado por seu pedido na SportLife!</p>
					<p>Assim que seu pacote for enviado, enviaremos um número de rastreamento.</p>
					<Link to='/'>
						<button>voltar as compras</button>
					</Link>
					</div>
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
