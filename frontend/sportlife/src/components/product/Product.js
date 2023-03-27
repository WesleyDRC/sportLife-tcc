import ImagesProduct from './components/ImagesProduct'
import ProductInfos from './components/ProductInfos'
import Render from './components/Render'

import styles from './Product.module.css'

export default function PageProduct(props){
		return(
		<div className={styles.container}>
			<div className={styles.imageAndButtons}>
				<ImagesProduct modalZoom={props.modalZoom} setModalZoom={props.setModalZoom} />
				<ProductInfos />
			</div>
				<Render />
		</div>
	)
}
