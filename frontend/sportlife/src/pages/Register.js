import FormRegister from "../components/register/FormRegister";
import styles from './Register.module.css'

export default function Register(){
	return(
		<div className={styles.container}>
			<FormRegister />
		</div>
	)
}
