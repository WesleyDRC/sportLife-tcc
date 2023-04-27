import styles from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser";

export default function Form() {
  const { updateUser, user } = useUser();
	const [firstName, setFirstName] = useState(user.firstName)
	const [lastName, setLastName] = useState(user.lastName)
	const [cpf, setCpf] = useState(user.CPF)
	const [gender, setGender] = useState(user.gender)
	const [dateBirth, setDateBirth] = useState(user.dateBirth)
	const [telephone, setTelephone] = useState(user.telephone)

	const navigate = useNavigate()

	const submit = async (e) =>{
		e.preventDefault();
		const response = await updateUser(firstName, lastName,cpf, gender, dateBirth, telephone)
		navigate('/user/personaldata')
	}

  return (
    <div>
      <h1 className={styles.title}>Adicione seus dados !</h1>
      <div className={styles.container}>
        <form onSubmit={(e) => {submit(e)}}>
          <div className={styles.subContainer}>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id='name'
                type="text"
                placeholder="Digite seu nome"
                value={firstName}
                onChange={(e) => [setFirstName(e.target.value)]}
              />
            </div>
            <div>
              <label htmlFor="lastName">Sobrenome</label>
              <input
                id="lastName"
                type="text"
                placeholder="Digite seu sobrenome"
                value={lastName}
                onChange={(e) => [setLastName(e.target.value)]}
              />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div>
              <label htmlFor="CPF">CPF</label>
              <input
								id="CPF"
								type="number"
								placeholder="Digite seu CPF"
                maxLength='11'
								value={cpf}
								onChange={(e) => [setCpf(e.target.value)]} />
            </div>
            <div>
              <label htmlFor="sex">Gênero</label>
              <select id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                <option value='' selected>Opcional</option>
                <option value='M'>Masculino</option>
                <option value='F'>Feminino</option>
              </select>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div>
              <label htmlFor="date">Data de nascimento</label>
              <input
								id="date"
								type="date"
								value={dateBirth}
								onChange={(e) => [setDateBirth(e.target.value)]}/>
            </div>
            <div>
              <label htmlFor="celNumber">Número de celular</label>
              <input
                id="celNumber"
                type="number"
                placeholder="Digite seu celular"
								value={telephone}
                onChange={(e) => [setTelephone(e.target.value)]}
              />
            </div>
          </div>
          <div className={styles.positionButton}>
            <button type="submit" className={styles.button}>Salvar</button>
          </div>
        </form>
      </div>

    </div>
  );
}
