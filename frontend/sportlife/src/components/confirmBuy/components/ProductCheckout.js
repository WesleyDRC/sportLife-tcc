import styles from './ProductCheckout.module.css'

import useCart from '../../../hooks/useCart'

import {Link} from 'react-router-dom'

import priceBRL from '../../../utils/formatPrice';

export default function ProductCheckout({url, name, size, price, quantity, product, id}){
	const { deleteProductCheckout } = useCart();
	return(
		<div className={styles.container}>
				<div className={styles.productAndInfos} data_product={JSON.stringify(product)}>
					<div className={styles.product}>
						<Link to={`/product/${id}`}>
							<img src={url}/>
						</Link>
						<div className={styles.productInfos}>
							<p className={styles.nameProduct}>{quantity}x {name}</p>
							<p className={styles.titleSize}>Tamanho: {size}</p>
						</div>
					</div>
					<div className={styles.price}>
						<p>{priceBRL(price * quantity)}</p>
					</div>
					<div className={styles.buttons}>
							<button className={styles.alter}>Alterar</button>
							<button onClick={deleteProductCheckout} className={styles.delete}>Excluir</button>
					</div>
				</div>
		</div>
	)
}
