import styles from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser";

export default function Form() {
  const { updateUser, user } = useUser();
	const [name, setName] = useState(user.name)
	const [lastName, setLasName] = useState()
	const [cpf, setCpf] = useState()
	const [gender, setGender] = useState()
	const [dateBirth, setDateBirth] = useState()
	const [phone, setPhone] = useState()
	const navigate = useNavigate()

	const submit = async (e) =>{
		e.preventDefault();
		const response = await updateUser(user.id,name)
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
                value={name}
                onChange={(e) => [setName(e.target.value)]}
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
              <input
								id="sex"
								type="text"
								placeholder="Digite seu gênero"
								value={gender}
								onChange={(e) => [setGender(e.target.value)]}/>
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
								value={phone}
                onChange={(e) => [setPhone(e.target.value)]}
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
