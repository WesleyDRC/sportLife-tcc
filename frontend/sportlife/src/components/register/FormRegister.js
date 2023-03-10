import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import styles from './FormRegister.module.css'
import Input from '../login/FormInput';

export default function FormRegister(){

	const { SignUp } = useAuth();
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const submit = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await SignUp(email, password);

    if (response) {
      setError(response);
      return;
    }

    navigate("/");
  }

	return(
		<div className={styles.container}>
				<div className={styles.formLogo}>
					<img src="https://i.imgur.com/lGlp8fZ.png" alt="Logo Sportlife"/>
					<p>Sport<span>Life</span></p>
				</div>
				<div className={styles.formRegister}>
					<form method='post' autoComplete='off' onSubmit={(e) => submit(e)}>
						<Input type='text' placeholder='Email' eye={false} value={email} onChange={(e) => [setEmail(e.target.value)]} />
						<Input type='password' placeholder='Senha' eye={true} value={password} onChange={(e) => [setPassword(e.target.value)]} />
						<Input type='password' placeholder='Confirme sua senha' eye={true} value={confirmPass} onChange={(e) => [setConfirmPass(e.target.value)]} />
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
