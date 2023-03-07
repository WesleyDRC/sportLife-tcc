import ImagesProduct from './components/ImagesProduct'
import ProductInfos from './components/ProductInfos'

import styles from './Product.module.css'

export default function PageProduct(){
	return(
		<div className={styles.container}>
			<ImagesProduct />
			<ProductInfos />
		</div>
	)
}
