import styles from './CarouselProduct.module.css'

import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

import Product from './Product';

export default function CarouselProduct(props){
	return(
		<div className={styles.container}>
			<p>Mais Vistos</p>
			<div className={styles.carousel}>
				<FaArrowLeft className={styles.arrow} />
				<div className={styles.promotions}>
						<Product src={'https://i.imgur.com/LTnbPIK.jpg'} name={'Camisa preta'}  />
						<Product src={'https://i.imgur.com/LTnbPIK.jpg'} name={'Camisa preta'}  />
						<Product src={'https://i.imgur.com/LTnbPIK.jpg'} name={'Camisa preta'}  />
						<Product src={'https://i.imgur.com/LTnbPIK.jpg'} name={'Camisa preta'}  />
						<Product src={'https://i.imgur.com/LTnbPIK.jpg'} name={'Camisa preta'}  />
				</div>
				<FaArrowRight className={styles.arrow} />
			</div>

		</div>
	)
}
