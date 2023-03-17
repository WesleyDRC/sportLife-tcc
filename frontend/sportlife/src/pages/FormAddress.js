import styles from './FormAddress.module.css'

import NavBar from '../components/profile/components/NavBar'

import Header from '../components/home/header/Header'
import EditFormAddress from '../components/profile/components/EditFormAddress'

export default function FormAddress(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<NavBar personalData={false} address={true} request={false}/>
				<EditFormAddress />
			</div>
		</div>
	)
}
