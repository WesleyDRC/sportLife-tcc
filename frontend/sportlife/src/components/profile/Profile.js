import {useState} from 'react'

import styles from './Profile.module.css'

import NavBar from './components/NavBar'

export default function Profile(props){
	return(
		<div className={styles.container}>
			<NavBar />
		</div>
	)
}
