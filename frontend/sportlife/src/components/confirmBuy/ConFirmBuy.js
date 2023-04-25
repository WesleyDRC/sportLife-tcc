import styles from './ConFirmBuy.module.css';

import CardProduct from './components/CardProduct';

import Summary from './components/Summary';

import CalcDelivery from './components/CalcDelivery';

import { ToastContainer } from "react-toastify";

export default function ConFirmBuy(){
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
        autoClose={3000}
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
