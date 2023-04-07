import {useRef, useEffect, useState} from 'react'
import styles from './ImagesProduct.module.css'
import AxiosRepository from '../../../repository/AxiosRepository';
import { useParams } from "react-router-dom";
import Loading from '../../home/main/components/Loading';

export default function ImagesProduct(props){
	const mainPhoto = useRef()
	const image1 = useRef()
	const image2 = useRef()
	const image3 = useRef()
	const [product, setProduct] = useState([]);
	const [centralImage,setCentralImage] = useState(1)
	const [loading, setLoading] = useState(true);
	let { id } = useParams();
	let setModalZoom = props.setModalZoom

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

	function zoomImage(){
		setModalZoom(true)
	}

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
			setLoading(false)
    }).catch(() => {
			setLoading(false)
		});
  }, [id]);

	if(!loading) {
		return(
			<div className={styles.container}>
					<img className={styles.mainPhoto} onClick={zoomImage} ref={mainPhoto} src={product.imageMain} alt='Imagem do produto' />
					<div className={styles.otherPhotos}>
						<img ref={image1} className={centralImage === 1 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage1} src={product.imageMain} alt='Imagem do produto' />
						<img ref={image2} className={centralImage === 2 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage2} src={product.imageSecondary} alt='Imagem do produto' />
						<img ref={image3} className={centralImage === 3 ? styles.opacityTrue : styles.opacityNone} onClick={changeImage3} src={product.imageTertiary} alt='Imagem do produto' />
					</div>
			</div>
		)
	} else {
		return (
			<div className={styles.container}>
				<div className={styles.mainPhoto}>
					<Loading />
				</div>
				<div className={styles.otherPhotos}>
					<div>
						<Loading />
					</div>
					<div>
						<Loading />
					</div>
					<div>
						<Loading />
					</div>

				</div>
			</div>
		)
	}
}
