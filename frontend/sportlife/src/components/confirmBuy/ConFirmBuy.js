import styles from './ConFirmBuy.module.css';

import CardProduct from './components/CardProduct';

import Summary from './components/Summary';

import CalcDelivery from './components/CalcDelivery';

import { ToastContainer } from "react-toastify";

import { useEffect } from 'react';

import useCart from '../../hooks/useCart';
import useUser from '../../hooks/useUser';

export default function ConFirmBuy(){

	const { getCartUser, calculateShippingPrice } = useCart();

  const { address } = useUser()

	useEffect(() => {
		async function fetchData() {
      await getCartUser();
    }
    fetchData();
	},[])

	useEffect(() => {
		if(address && Object.keys(address).length > 0) {
			calculateShippingPrice(address.postal_code)
		}
	}, [address])

	return(
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div className={styles.cardProduct}>
					<CardProduct />
				</div>
				<div className={styles.sumary}>
					<Summary />
				</div>
				<div className={styles.calcDelivery}>
					<CalcDelivery />
				</div>
			</div>
			<ToastContainer
        position="top-right"
				style={{fontSize:'1.4rem'}}
        autoClose={3700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
		</div>
	)
}
