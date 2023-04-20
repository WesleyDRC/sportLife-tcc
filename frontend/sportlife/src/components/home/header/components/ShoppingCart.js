import styles from './ShoppingCart.module.css'

import useCart from '../../../../hooks/useCart';

import {CgClose} from "react-icons/cg";
import {BsBag} from "react-icons/bs";

import priceBRL from '../../../../utils/formatPrice';

import ProductCart from './ProductCart';

import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function ShoppingCart(){

	const { manupilationCartClose, setOpenCart, getCartUser, openCart } = useCart();
	const [cart, setCart] = useState([]);

	function keepContinue(){
		window.location.href="https://sport-life-tcc.vercel.app/";
		setOpenCart(false)
	}

	useEffect(() => {
		async function fetchData() {
      const result = await getCartUser();
			setCart(result.data.cart)
    }
    fetchData();
	},[openCart, cart])

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
					{cart.length > 0 && cart[0].items.length > 0 && (
            cart[0].items.map((item, i) => (
              <ProductCart
                key={item.id}
                id = {item.id}
								urlImg={item.imageMain}
								name={item.name}
								price={priceBRL(item.price)}
								size={item.size}
								quantity={item.quantity}
								product={item}
              />
            ))
          )}
					</div>
					<div className={styles.finalizeOrder}>
						<div className={styles.subTotal}>
							<p>SUB-TOTAL ( {cart.length> 0 && cart[0].totalItems} produtos )</p>
							<p>{priceBRL(cart.length > 0 && cart[0].totalAmount)}</p>
						</div>
						<div className={styles.total}>
							<p>TOTAL</p>
							<p className={styles.totalPrice}>{priceBRL(cart.length > 0 && cart[0].totalAmount)}</p>
						</div>
						<Link to ='/checkout'>
							<button className={styles.btn}>FINALIZAR COMPRA</button>
						</Link>
						<p className={styles.keepContinue} onClick={keepContinue}>CONTINUE COMPRANDO</p>
					</div>
				</aside>
			</div>
	)
}
