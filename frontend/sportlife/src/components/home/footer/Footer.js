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
				<hr className={styles.line} />
				<div className={styles.secondInfos}>
					<p className={styles.title}>Institucional</p>
					<p className={styles.options}>Quem somos ?</p>
				</div>
				<hr className={styles.line} />
				<div className={styles.thirdInfos}>
					<p className={styles.title}>Saiba mais</p>
					<p className={styles.options}>Entre em contato</p>
					<p className={styles.options}>Dúvidas frequentes</p>
				</div>
				<hr className={styles.line} />
				<div className={styles.fourthInfos}>
					<p className={styles.title}>Formas de pagamento</p>
					<img src='https://i.imgur.com/m7WBBao.png' alt='payment methods'/>
				</div>
				<hr className={styles.line} />
				<div className={styles.fifthInfos}>
					<p className={styles.title}>Layout e Desenvolvimento</p>
					<div className={styles.devs}>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='developers and layout'/>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='developers and layout'/>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='developers and layout'/>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='developers and layout'/>
						<img src='https://i.imgur.com/MC3pcrf.png' alt='developers and layout'/>
					</div>
				</div>
		</footer>
	)
}
