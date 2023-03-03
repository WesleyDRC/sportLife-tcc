import React from 'react';
import styles from './FormLogin.module.css'
import Input from './FormInput';

export default function FormLogin(){
	return(
		<div className={styles.container}>
				<div className={styles.formLogo}>
					<img src="https://i.imgur.com/lGlp8fZ.png" alt="Logo Sportlife"/>
					<p>Sport<span>Life</span></p>
				</div>
				<div className={styles.formLogin}>
					<form method='post' autoComplete='off'>
						<Input type='text' placeholder='Email' eye={false} />
						<Input type='password' placeholder='Senha' eye={true} />
						<div className={styles.formBtn}>
							<button type='submit'>Entrar</button>
						</div>
						<div className={styles.formNotRegister}>
							<p>Não tem conta? <span>Registre-se</span> </p>
						</div>
					</form>
				</div>
		</div>
	)
}
