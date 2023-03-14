import styles from './RequestPage.module.css'

import Header from '../components/home/header/Header'
import NavBar from '../components/profile/components/NavBar'
import Request from '../components/profile/components/Request'


export default function PersonalDataPage(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<NavBar personalData={false} address={false} request={true} />
				<Request />
			</div>
		</div>
	)
}
