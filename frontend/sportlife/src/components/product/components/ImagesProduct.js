import {useRef, useEffect, useState} from 'react'
import styles from './ImagesProduct.module.css'
import AxiosRepository from '../../../repository/AxiosRepository';
import { useParams } from "react-router-dom";

export default function ImagesProduct(){
	const mainPhoto = useRef()
	const image1 = useRef()
	const image2 = useRef()
	const image3 = useRef()
	const [product, setProduct] = useState([]);
	let { id } = useParams();

	function changeImage1(){
		mainPhoto.current.src = image1.current.src
	}

	function changeImage2(){
		mainPhoto.current.src = image2.current.src
	}

	function changeImage3(){
		mainPhoto.current.src = image3.current.src
	}

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
    });
  }, [id]);

	return(
		<div className={styles.container}>
			<img className={styles.mainPhoto} ref={mainPhoto} src={product.imageMain} alt='Imagem do produto' />
			<div className={styles.otherPhotos}>
				<img ref={image1} onClick={changeImage1} src={product.imageMain} alt='Imagem do produto' />
				<img ref={image2} onClick={changeImage2} src={product.imageSecondary} alt='Imagem do produto' />
				<img ref={image3} onClick={changeImage3} src={product.imageTertiary} alt='Imagem do produto' />
			</div>
		</div>
	)
}
