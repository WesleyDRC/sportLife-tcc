import styles from './ExitPage.module.css'

import Exit from "../components/profile/components/Exit";
import Header from "../components/home/header/Header";

export default function PersonalDataPage(){
	return(
		<div>
			<Header />
			<div className={styles.container}>
				<Exit />
			</div>
		</div>
	)
}
