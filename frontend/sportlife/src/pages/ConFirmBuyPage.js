import styles from './ConFirmBuyPage.module.css'

import HeaderConfirmBuy from '../components/confirmBuy/components/HeaderConfirmBuy'
import ConFirmBuy from '../components/confirmBuy/ConFirmBuy'

export default function ConFirmBuyPage(){
	return(
		<div className={styles.container}>
			<HeaderConfirmBuy />
			<ConFirmBuy />
		</div>
	)
}
