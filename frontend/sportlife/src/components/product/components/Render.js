import styles from './Render.module.css'
import AdditionalInfos from './AdditionalInfos'
import Carousel from '../../home/main/components/Product'
import CarouselProduct from "../../home/main/components/CarouselProduct"

export default function Render(){
	return(
		<div className={styles.container}>
			<hr className={styles.line} />
			<div className={styles.options}>
				<p className={`${styles.addInfos} ${styles.borderTop}`}>Informações Adicionais</p>
				<p className={styles.assessements}>Avaliações</p>
			</div>
			<AdditionalInfos />
			<CarouselProduct titleCarousel="ITENS RELACIONADOS"  />
		</div>
	)
}
