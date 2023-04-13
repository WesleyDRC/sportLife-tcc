import styles from './Address.module.css'
import useUser from '../../../hooks/useUser'
import { useEffect } from 'react'

import {Link} from 'react-router-dom'

export default function Address(){
	const {address,getAddress} = useUser()

	useEffect(() => {
		getAddress()
	}, [])

	if(address !== null){
	return(
			<div className={styles.container}>
				<h1>Endereço</h1>
				<div className={styles.subContainer}>
					<div className={styles.display}>
						<div>
						<p className={styles.quest}>CEP</p>
							<p className={styles.res}>{address.postal_code}</p>
						</div>
						<div>
						<p className={styles.quest}>País</p>
							<p className={styles.res}>{address.country}</p>
						</div>
					</div>
					<div className={styles.display}>
						<div>
							<p className={styles.quest}>Cidade</p>
							<p  className={styles.res}>{address.city}</p>
						</div>
						<div>
							<p className={styles.quest}>Rua</p>
							<p  className={styles.res}>{address.road}</p>
						</div>
					</div>
					<div className={styles.display}>
						<div>
							<p className={styles.quest}>Bairro</p>
							<p  className={styles.res}>{address.neighborhood}</p>
						</div>
						<div>
							<p className={styles.quest}>Numero</p>
							<p  className={styles.res}>{address.number}</p>
						</div>
					</div>

					<p className={styles.quest}>Complemento</p>
					<p className={styles.res}>{address.complement}</p>
					<Link to="/user/editAddress">
						<p className={styles.edit}>EDITAR</p>
					</Link>
				</div>
			</div>
		)
	}else{
		return(
			<div className={styles.container}>
				<h1>Endereços</h1>
				<div className={styles.subContainer}>
					<p className={styles.mensage}>Você não tem nenhum endereço cadastrado</p>
					<Link to="/user/createAddress">
						<p className={styles.edit}>Cadastrar endereço</p>
					</Link>
				</div>
			</div>
		)
	}
}
