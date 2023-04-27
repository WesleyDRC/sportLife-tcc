import styles from './Summary.module.css';

import { useEffect } from 'react';

import useCart from '../../../hooks/useCart';

import priceBRL from '../../../utils/formatPrice';

import PaymentButton from './PaymentButton';


export default function Summary(){

	const { getCartUser, setCart, cart, total, setTotal, setProductsCart, infosCart } = useCart();

	useEffect(() => {
		async function fetchData() {
      await getCartUser();
    }
    fetchData();
	},[])

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

			{total !== '1.00' ? <PaymentButton /> : ""}


		</div>
	)
}
