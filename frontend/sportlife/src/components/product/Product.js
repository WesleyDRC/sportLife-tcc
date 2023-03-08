import ImagesProduct from './components/ImagesProduct'
import ProductInfos from './components/ProductInfos'
import Render from './components/Render'

import styles from './Product.module.css'

export default function PageProduct(){
	return(
		<div className={styles.container}>
			<div className={styles.imageAndButtons}>
				<ImagesProduct />
				<ProductInfos />
			</div>
				<Render />
		</div>
	)
}
