import { useState, useEffect } from 'react'
import styles from './Render.module.css'
import AdditionalInfos from './AdditionalInfos'
import Assessements from './Assessments'
import CarouselProduct from "../../home/main/components/CarouselProduct"
import AxiosRepository from '../../../repository/AxiosRepository'

export default function Render(){
	const [page, setPage] = useState(0)
	const [products, setProducts] = useState();
	const [loading, setLoading] = useState(true);
  useEffect(() => {
    AxiosRepository.findAll({}).then((resp) => {
      setProducts(resp.data);
			setLoading(false)
    }).catch((error) => {setLoading(false)
      console.log(error)});
  }, []);
	function AssView(){
			setPage(1)
	}
	function InfosView(){
		setPage(0)
	}

	if(page === 0){
		return(
			<div className={styles.container}>
				<hr className={styles.line} />
				<div className={styles.options}>
					<p className={`${styles.addInfos} ${styles.borderTop}`}>Informações Adicionais</p>
					<p className={styles.assessements} onClick={AssView} id='ass'>Avaliações</p>
				</div>
				<AdditionalInfos />
				<CarouselProduct loading={loading} products={products} titleCarousel="ITENS RELACIONADOS" />
			</div>
		)
	}else{
		return(
			<div className={styles.container}>
				<hr className={styles.line} />
				<div className={styles.options}>
					<p className={styles.addInfos} onClick={InfosView} id='info'>Informações Adicionais</p>
					<p className={`${styles.assessements} ${styles.borderTop}`} >Avaliações</p>
				</div>
				<Assessements />
				<CarouselProduct loading={loading} products={products} titleCarousel="ITENS RELACIONADOS" />
			</div>
		)
	}
}
