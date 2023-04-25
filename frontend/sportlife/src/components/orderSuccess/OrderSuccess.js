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
					<img src='https://i.imgur.com/guqThjM.png' />
					<p>{user.firstName} {user.lastName},</p>
					<p>Obrigado por seu pedido na SportLife!</p>
					<p>Assim que seu pacote for enviado, enviaremos um número de rastreamento.</p>
					<Link to='/'>
						<button>voltar as compras</button>
					</Link>
					</div>
			</div>
    </div>
  );
}
