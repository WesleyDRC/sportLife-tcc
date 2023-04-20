import styles from './Summary.module.css';

import { useEffect, useState } from 'react';

import useCart from '../../../hooks/useCart';

import priceBRL from '../../../utils/formatPrice';

export default function Summary(){

	const { getCartUser } = useCart();
	const [cart, setCart] = useState([]);

	useEffect(() => {
		async function fetchData() {
      const result = await getCartUser();
			setCart(result.data.cart)
    }
    fetchData();
	},[cart])

	return(
		<div className={styles.container}>
			<h2>resumo da compra</h2>
			<div className={styles.subTotal}>
				<p>sub-total</p>
				<p>{priceBRL(cart.length > 0 && cart[0].totalAmount)}</p>
			</div>
			<div className={styles.delivery}>
				<p>entrega</p>
				<p>R$0,00</p>
			</div>
			<div className={styles.total}>
				<p>total</p>
				<p className={styles.priceTotal}>{priceBRL(cart.length > 0 && cart[0].totalAmount)}</p>
			</div>
			<button className={styles.firstBtn}>paypal</button>
			<button className={styles.secondBtn}>paypal</button>
		</div>
	)
}
