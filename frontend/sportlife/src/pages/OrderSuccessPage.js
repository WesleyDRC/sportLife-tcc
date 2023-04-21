import styles from './OrderSuccessPage.module.css'

import OrderSuccess from '../components/orderSuccess/OrderSuccess'

export default function OrderSuccessPage(){
	return(
		<div className={styles.container}>
			<OrderSuccess />
		</div>
	)
}
