import styles from './ProfilePage.module.css'

import Profile from '../components/profile/Profile'
import Header from "../components/home/header/Header";
import Footer from '../components/home/footer/Footer'

export default function ProfilPage(){
	return(
		<div className={styles.container}>
			<Header />
			<Profile />
			<Footer />
		</div>
	)
}
