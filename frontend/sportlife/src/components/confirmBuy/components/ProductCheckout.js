import styles from './ProductCheckout.module.css'

export default function ProductCheckout({url, name, size, price, quantity}){
	return(
		<div className={styles.container}>
				<div className={styles.productAndInfos}>
					<div className={styles.product}>
						<img src={url}/>
						<div className={styles.productInfos}>
							<p className={styles.nameProduct}>{quantity}x {name}</p>
							<p className={styles.titleSize}>Tamanho: {size}</p>
						</div>
					</div>
					<div className={styles.price}>
						<p>{price}</p>
					</div>
					<div className={styles.buttons}>
							<button className={styles.alter}>Alterar</button>
							<button className={styles.delete}>Excluir</button>
					</div>
				</div>
		</div>
	)
}
