import Carousel from "./components/Carousel"
import Promotions from "./components/Promotions"
import CarouselProduct from "./components/CarouselProduct"
import InfoBox from "./components/InfoBox"

import styles from './Main.module.css'

export default function Main(){
	return(
		<main className={styles.container}>
			<Carousel />
			<Promotions />
			<CarouselProduct titleCarousel="MAIS VISTOS" />
			<CarouselProduct titleCarousel="LANÇAMENTOS" />
			<InfoBox />
		</main>
	)
}
