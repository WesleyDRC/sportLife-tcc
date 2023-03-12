import styles from './FormPage.module.css'

import NavBar from '../components/profile/components/NavBar'
import Form from '../components/profile/components/Form'
import Header from '../components/home/header/Header'

export default function FormPage(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<NavBar personalData={true} address={false} request={false}/>
				<Form />
			</div>
		</div>
	)
}
