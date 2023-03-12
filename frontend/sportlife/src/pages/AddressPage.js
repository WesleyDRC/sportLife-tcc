import styles from './PersonalDataPage.module.css'

import Header from '../components/home/header/Header'
import NavBar from '../components/profile/components/NavBar'
import Address from '../components/profile/components/Address'


export default function PersonalDataPage(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<NavBar />
				<Address />
			</div>
		</div>
	)
}
