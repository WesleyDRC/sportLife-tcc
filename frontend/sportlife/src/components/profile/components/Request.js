import styles from './Request.module.css'

import CardOrder from './CardOrder'

import { useEffect, useState } from 'react'

import AxiosRepository from '../../../repository/AxiosRepository'

export default function Request(){

	const [orders, setOrders] = useState([])

	useEffect(() =>{
		AxiosRepository.getOrderUser()
		.then((resp) => {
			setOrders(resp.data);
		})
		.catch((error) => {
			console.log(error);
		});
	},[])
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>Pedidos</h1>
			<div className={styles.subContainer}>
			{orders.order && orders.order.length > 0 &&
        orders.order.map((order) => (
          <CardOrder
						id={order.productId}
						key={order.idOrder}
            imageUrl={order.imageUrl}
            name={order.name}
						quantity={order.quantity}
						size={order.size}
						status={order.status}
						price={order.price}
          />
        ))}
			</div>
		</div>
	)
}
