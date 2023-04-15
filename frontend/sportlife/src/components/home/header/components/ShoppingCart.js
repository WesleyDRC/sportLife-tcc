import styles from './ShoppingCart.module.css'

import useCart from '../../../../hooks/useCart';

import {CgClose} from "react-icons/cg";
import {BsBag} from "react-icons/bs";

import ProductCart from './ProductCart';

import { Link } from 'react-router-dom';

export default function ShoppingCart(){

	const { manupilationCartClose, setOpenCart } = useCart()

	function keepContinue(){
		window.location.href="https://sport-life-tcc.vercel.app/";
		setOpenCart(false)
	}

	return(
			<div className={styles.container}>
				<aside>
					<header className={styles.headerCart}>
						<div className={styles.titleCart}>
							<BsBag className={styles.bagIcon} />
							<h2>Carrinho de Compras</h2>
						</div>
						<CgClose className={styles.closeButton} onClick={manupilationCartClose} />
					</header>

					<div className={styles.itemsCart}>
						<ProductCart />
						<ProductCart />
						<ProductCart />
					</div>

					<div className={styles.finalizeOrder}>
						<div className={styles.subTotal}>
							<p>SUB-TOTAL ( 0 produtos )</p>
							<p>R$ 0,00</p>
						</div>
						<div className={styles.total}>
							<p>TOTAL</p>
							<p className={styles.totalPrice}>R$ 0,00</p>
						</div>
						<button className={styles.btn}>FINALIZAR COMPRA</button>
						<p className={styles.keepContinue} onClick={keepContinue}>CONTINUE COMPRANDO</p>
					</div>
				</aside>
			</div>
	)
}
