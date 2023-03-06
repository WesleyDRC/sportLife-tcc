import {useRef} from 'react'
import styles from './CarouselProduct.module.css'

import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

import Product from './Product';

export default function CarouselProduct(props){

	const carousel = useRef(null)

	const handleLeftClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

	const handleRightClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft += carousel.current.offsetWidth
	}

	return(
		<div className={styles.container}>
			<p className={styles.title}>MAIS VISTOS</p>
			<div className={styles.carousel}>
				<FaArrowLeft className={styles.arrow} onClick={handleLeftClick} />
				<div className={styles.promotions} ref={carousel}>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
						<Product src={'https://i.imgur.com/pnoGRSq.png'} name={'CAMISETA NIKE SPORTSWEAR ICON FUTURA'} price={"R$ 59,99"}/>
				</div>
				<FaArrowRight className={styles.arrow} onClick={handleRightClick} />
			</div>
		</div>
	)
}
