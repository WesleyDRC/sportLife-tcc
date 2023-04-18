import styles from './CartProduct.module.css'

export default function CartProduct(){
	return(
		<div className={styles.container}>
			<div className={styles.tableProducts}>
				<div className={styles.titles}>
					<p>produto</p>
					<p>preço</p>
					<p>ações</p>
				</div>
				<div className={styles.productAndInfos}>
					<div className={styles.product}>
						<img src='https://imgnike-a.akamaihd.net/768x768/0219735A.jpg'/>
						<div className={styles.productInfos}>
							<p className={styles.titleProduct}>Camisa Nike das braba</p>
							<p className={styles.titleSize}>Tamanho: M</p>
						</div>
					</div>
					<div className={styles.price}>
						<p>R$279,99</p>
					</div>
					<div className={styles.buttons}>
							<button className={styles.alter}>Alterar</button>
							<button className={styles.delete}>Excluir</button>
					</div>
				</div>
			</div>
		</div>
	)
}
