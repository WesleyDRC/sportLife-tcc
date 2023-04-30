import styles from './Footer.module.css'

import {FaInstagram} from 'react-icons/fa'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

export default function Footer(){
	return(
		<footer className={styles.container}>
				<div className={styles.firstInfos}>
					<div className={styles.logo}>
						<img src='https://i.imgur.com/BUAhj3p.png' alt='Logo SportLife' />
						<p>SportLife</p>
					</div>
					<div className={styles.socialMedia}>
						<p>Redes Sociais</p>
						<div className={styles.icons}>
							<FaInstagram className={styles.icon} />
							<AiFillFacebook className={styles.icon} />
							<AiFillLinkedin className={styles.icon}/>
						</div>
					</div>
				</div>
				<div className={styles.secondInfos}>
					<p className={styles.title}>Institucional</p>
					<p className={styles.options}>Quem somos ?</p>
				</div>
				<div className={styles.thirdInfos}>
					<p className={styles.title}>Saiba mais</p>
					<p className={styles.options}>Entre em contato</p>
					<p className={styles.options}>Dúvidas frequentes</p>
				</div>
				<div className={styles.fourthInfos}>
					<p className={styles.title}>Formas de pagamento</p>
					<img src='https://i.imgur.com/m7WBBao.png' alt='payment methods'/>
				</div>
				<div className={styles.fifthInfos}>
					<p className={styles.title}>Layout e Desenvolvimento</p>
					<div className={styles.devs}>
						<img src='https://i.imgur.com/ZEjEQui.jpg' alt='developers and layout'/>
						<img src='https://i.imgur.com/hJrVCXu.jpg' alt='developers and layout'/>
						<img src='https://i.imgur.com/IkEF8pA.jpg' alt='developers and layout'/>
						<img src='https://i.imgur.com/LLl8NHw.jpg' alt='developers and layout'/>
						<img src='https://i.imgur.com/ebJFnpX.png' alt='developers and layout'/>
					</div>
				</div>
		</footer>
	)
}
