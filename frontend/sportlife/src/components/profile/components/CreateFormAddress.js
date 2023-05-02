import styles from './CreateFormAddress.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from '../../../hooks/useUser'

export default function CreateFormAddress({title}){
	const [cep,setCep] = useState()
	const [road,setRoad] = useState()
	const [city,setCity] = useState()
	const [state,setState] = useState()
	const [neighborhood,setNeighborhood] = useState()
	const [number,setNumber] = useState()
	const [complement,setComplement] = useState()
	const {createAddress} = useUser()
	const navigate = useNavigate()

	if(cep != undefined && cep.length === 8){
		let url = `https://viacep.com.br/ws/${cep}/json`
		fetch(url)
		.then((res) => res.json())
		.then((data) =>{
			if(data.erro == true){
			}else{
				setRoad(data.logradouro)
				setCity(data.localidade)
				setNeighborhood(data.bairro)
				setState(data.uf)
			}
		})
	}

	const submit = async (e) =>{
		e.preventDefault();
		const response = await createAddress(city,cep,state,road,neighborhood,number,complement)
		navigate('/user/address')
	}
	return(
		<div className={styles.container}>
			<h1>{title}</h1>
			<div className={styles.subContainer}>
				<form onSubmit={(e) => {submit(e)}}>
					<div className={styles.inputsContainer}>
						<div>
							<label htmlFor='cep'>CEP</label>
							<input
								type='number'
								id='cep'
								placeholder='Digite seu CEP'
								value={cep}
								onChange={(e) => [setCep(e.target.value)]}
							/>
							</div>
							<div>
							<label htmlFor='state'>Estado</label>
								<input
									type='text'
									id='state'
									placeholder='Digite seu estado'
									value={state}
									onChange={(e) => [setState(e.target.value)]}
								/>
							</div>
					</div>
					<div className={styles.inputsContainer}>
						<div>
							<label htmlFor='city'>Cidade</label>
							<input
								type='text'
								id='city'
								placeholder='Digite sua cidade'
								value={city}
								onChange={(e) => [setCity(e.target.value)]}
							/>
							</div>
							<div>
							<label htmlFor='road'>Rua</label>
								<input
									type='text'
									id='road'
									placeholder='Digite sua rua'
									value={road}
									onChange={(e) => [setRoad(e.target.value)]}
								/>
							</div>
					</div>
					<div className={styles.inputsContainer}>
						<div>
							<label htmlFor='neighborhood'>Bairro</label>
							<input
								type='text'
								id='neighborhood'
								placeholder='Digite seu Bairro'
								value={neighborhood}
								onChange={(e) => [setNeighborhood(e.target.value)]}
							/>
						</div>
						<div>
							<label htmlFor='number'>Número</label>
							<input
								type='number'
								id='number'
								placeholder='Digite seu numero'
								value={number}
								onChange={(e) => [setNumber(e.target.value)]}
							/>
						</div>
					</div>
					<label htmlFor='complement'>Complemento</label>
					<input
						type='text'
						id='complement'
						placeholder='Digite seu complemento'
						value={complement}
						onChange={(e) => [setComplement(e.target.value)]}
					/>
					<div className={styles.positionButton}>
						<button type="submit" className={styles.button}>Salvar</button>
					</div>
				</form>
			</div>
		</div>
	)
}
