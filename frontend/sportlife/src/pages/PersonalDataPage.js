import styles from './PersonalDataPage.module.css'

import Header from '../components/home/header/Header'
import NavBar from '../components/profile/components/NavBar'
import PersonalData from '../components/profile/components/PersonalData'


export default function PersonalDataPage(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<NavBar />
				<PersonalData />
			</div>
		</div>
	)
}
