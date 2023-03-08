import React from 'react';
import styles from './FormRegister.module.css'
import Input from '../login/FormInput';

export default function FormRegister(){
	return(
		<div className={styles.container}>
				<div className={styles.formLogo}>
					<img src="https://i.imgur.com/lGlp8fZ.png" alt="Logo Sportlife"/>
					<p>Sport<span>Life</span></p>
				</div>
				<div className={styles.formRegister}>
					<form method='post' autoComplete='off'>
						<Input type='text' placeholder='Email' eye={false} />
						<Input type='password' placeholder='Senha' eye={true} />
						<Input type='password' placeholder='Confirme sua senha' eye={true} />
						<div className={styles.formBtn}>
							<button type='submit'>Registrar</button>
						</div>
						<div className={styles.formNotRegister}>
							<p>Já possui uma conta? <span>Faça login</span> </p>
						</div>
					</form>
				</div>
		</div>
	)
}
