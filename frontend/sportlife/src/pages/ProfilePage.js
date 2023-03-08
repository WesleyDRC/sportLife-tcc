import styles from './ProfilePage.module.css'

import Profile from '../components/profile/Profile'

export default function ProfilPage(){
	return(
		<div className={styles.container}>
			<Profile />
		</div>
	)
}
