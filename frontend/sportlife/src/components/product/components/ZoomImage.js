import styles from './ZoomImage.module.css'

import {useEffect, useState, useRef} from 'react'

import Loading from '../../home/main/components/Loading';
import AxiosRepository from '../../../repository/AxiosRepository';
import { useParams } from "react-router-dom";

import {CgClose} from "react-icons/cg";

export default function ZoomImage(props){
	const mainPhoto = useRef()
	const image1 = useRef()
	const image2 = useRef()
	const image3 = useRef()
	const [centralImage,setCentralImage] = useState(1)
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	let { id } = useParams();

	function closeZoom(){
		props.setModalZoom(false)
	}

	function changeImage1(){
		mainPhoto.current.src = image1.current.src
		setCentralImage(1)
	}

	function changeImage2(){
		mainPhoto.current.src = image2.current.src
		setCentralImage(2)
	}

	function changeImage3(){
		mainPhoto.current.src = image3.current.src
		setCentralImage(3)
	}

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
			setLoading(false)
    }).catch(() => {
			setLoading(false)
		});
  }, [id]);

	if(!loading){
			return(
			<div className={styles.container}>
				<CgClose onClick={closeZoom} className={styles.buttonClose} />
				<div className={styles.modalImage}>
					<div className={props.modalZoom ? styles.modalOn : styles.modalOff}>
						<img src={product.imageMain} ref={mainPhoto} alt='Imagem do produto' />
					</div>
						<div className={styles.otherPhotos}>
							<img ref={image1} className={centralImage === 1 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage1}  src={product.imageMain} alt='Imagem do produto' />
							<img ref={image2} className={centralImage === 2 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage2}  src={product.imageSecondary} alt='Imagem do produto' />
							<img ref={image3} className={centralImage === 3 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage3}  src={product.imageTertiary} alt='Imagem do produto' />
						</div>
				</div>
			</div>
		)
	}else {
		return (
			<div className={styles.container}>
				<div className={styles.mainPhoto}>
					<Loading />
				</div>
			</div>
		)
	}
}
