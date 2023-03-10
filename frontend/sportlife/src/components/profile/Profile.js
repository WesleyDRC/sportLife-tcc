import {useState} from 'react'

import styles from './Profile.module.css'

import PersonalData from './components/PersonalData'
import NavBar from './components/NavBar'

export default function Profile(){
	return(
		<div className={styles.container}>
			<NavBar />
			<PersonalData  />
		</div>
	)
}
