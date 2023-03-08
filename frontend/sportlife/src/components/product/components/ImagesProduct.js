import {useRef} from 'react'
import styles from './ImagesProduct.module.css'

export default function ImagesProduct(){
	const mainPhoto = useRef()
	const image1 = useRef()
	const image2 = useRef()
	const image3 = useRef()

	function changeImage1(){
		mainPhoto.current.src = image1.current.src
	}

	function changeImage2(){
		mainPhoto.current.src = image2.current.src
	}

	function changeImage3(){
		mainPhoto.current.src = image3.current.src
	}

	return(
		<div className={styles.container}>
			<img className={styles.mainPhoto} ref={mainPhoto} src='https://i.imgur.com/pnoGRSq.png' alt='Imagem do produto' />
			<div className={styles.otherPhotos}>
				<img ref={image1} onClick={changeImage1} src='https://i.imgur.com/pnoGRSq.png' alt='Imagem do produto' />
				<img ref={image2} onClick={changeImage2} src='https://i.imgur.com/r1TaY1h.png' alt='Imagem do produto' />
				<img ref={image3} onClick={changeImage3} src='https://i.imgur.com/9vTRQeQ.png' alt='Imagem do produto' />
			</div>
		</div>
	)
}
