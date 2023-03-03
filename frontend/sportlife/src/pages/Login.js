import React from 'react';
import styles from './Login.module.css'

import FormLogin from '../components/login/FormLogin';

export default function Login(){
	return(
		<div className={styles.container}>
			<FormLogin />
		</div>
	)
}
