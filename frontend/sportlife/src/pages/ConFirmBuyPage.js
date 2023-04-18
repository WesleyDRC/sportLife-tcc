import styles from './ConFirmBuyPage.module.css'

import Header from '../components/home/header/Header'
import ConFirmBuy from '../components/confirmBuy/ConFirmBuy'
import Footer from '../components/home/footer/Footer'

export default function ConFirmBuyPage(){
	return(
		<div className={styles.container}>
			<Header />
			<ConFirmBuy />
		</div>
	)
}
