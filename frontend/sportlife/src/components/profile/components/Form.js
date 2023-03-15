import styles from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser";

export default function Form() {
  const { updateUser, user } = useUser();
	const [firstName, setFirstName] = useState(user.name)
	const [lastName, setLasName] = useState()
	const [cpf, setCpf] = useState()
	const [gender, setGender] = useState("")
	const [dateBirth, setDateBirth] = useState()
	const [telephone, setTelephone] = useState()
  const [selectValue, setSelectValue] = useState("")
	const navigate = useNavigate()

  function manipulateGender(){
    if(selectValue == 'M') setGender("M")
    if(selectValue == 'F') setGender("F")
    if(selectValue == '') setGender("")
  }

	const submit = async (e) =>{
		e.preventDefault();
    manipulateGender();
		const response = await updateUser(user.id,firstName, lastName,cpf, gender, dateBirth, telephone)
		alert(response.data.message)
		navigate('/user/personaldata')
	}

  return (
    <div>
      <h1>Adicione seus dados !</h1>
      <div className={styles.container}>
        <form onSubmit={(e) => {submit(e)}}>
          <div className={styles.subContainer}>
            <div>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={firstName}
                onChange={(e) => [setFirstName(e.target.value)]}
              />
            </div>
            <div>
              <label for="lastName">Sobrenome</label>
              <input
                id="lastName"
                type="text"
                placeholder="Digite seu sobrenome"
                value={lastName}
                onChange={(e) => [setLasName(e.target.value)]}
              />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div>
              <label for="CPF">CPF</label>
              <input
								id="CPF"
								type="text"
								placeholder="Digite seu CPF"
								value={cpf}
								onChange={(e) => [setCpf(e.target.value)]} />
            </div>
            <div>
              <label for="sex">Gênero</label>
              <select id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                <option value='' selected>Opcional</option>
                <option value='M'>Masculino</option>
                <option value='F'>Feminino</option>
              </select>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div>
              <label for="date">Data de nascimento</label>
              <input
								id="date"
								type="date"
								value={dateBirth}
								onChange={(e) => [setDateBirth(e.target.value)]}/>
            </div>
            <div>
              <label for="celNumber">Número de celular</label>
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
