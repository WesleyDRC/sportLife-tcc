import styles from './NavigationBrand.module.css'

import { useRef } from 'react';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import ImagesBrowsingCard from './ImagesBrowsingCard'

import { Navigate, useNavigate } from 'react-router-dom';

export default function NavigationBrand(){
	const Carousel = useRef(null);

	const navigate = useNavigate()

  const handleLeftClick = (e) => {
    e.preventDefault();
    Carousel.current.scrollLeft -= Carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    Carousel.current.scrollLeft += Carousel.current.offsetWidth;
  };
	return(
		<div className={styles.container}>
			<p className={styles.title}>Navegue por marcas</p>
			<div className={styles.photosContainer}>
				<img onClick={() => {navigate('/marca/puma')}} className={styles.logo} src='https://i.imgur.com/LkO860L.png' alt='Logo Puma'/>
				<img onClick={() => {navigate('/marca/fila')}} className={styles.logo} src='https://i.imgur.com/wAYQLwf.png' alt='Logo Fila'/>
				<img onClick={() => {navigate('/marca/mizuno')}} className={styles.logo} src='https://i.imgur.com/Z48eiIA.png' alt='Logo Mizuno'/>
				<img onClick={() => {navigate('/marca/nike')}} className={styles.logo} src='https://i.imgur.com/jQogHUN.png' alt='Logo Nike'/>
				<img onClick={() => {navigate('/marca/asics')}} className={styles.logo} src='https://i.imgur.com/928xw6j.png' alt='Logo Asics'/>
				<img onClick={() => {navigate('/marca/wilson')}} className={styles.logo} src='https://i.imgur.com/dCoxQpf.png' alt='Logo Wilson'/>
				<img onClick={() => {navigate('/marca/adidas')}} className={styles.logo} src='https://i.imgur.com/OCqxTH0.png' alt='Logo Adidas'/>
			</div>

			<div className={styles.carousel}>
        <IoIosArrowBack
          className={styles.arrowLeft}
          onClick={handleLeftClick}
        />
        <div className={styles.logos} ref={Carousel}>
					<img onClick={() => {navigate('/marca/puma')}} className={styles.logo} src='https://i.imgur.com/LkO860L.png' alt='Logo Puma'/>
					<img onClick={() => {navigate('/marca/fila')}} className={styles.logo} src='https://i.imgur.com/wAYQLwf.png' alt='Logo Fila'/>
					<img onClick={() => {navigate('/marca/mizuno')}} className={styles.logo} src='https://i.imgur.com/Z48eiIA.png' alt='Logo Mizuno'/>
					<img onClick={() => {navigate('/marca/nike')}} className={styles.logo} src='https://i.imgur.com/jQogHUN.png' alt='Logo Nike'/>
					<img onClick={() => {navigate('/marca/asics')}} className={styles.logo} src='https://i.imgur.com/928xw6j.png' alt='Logo Asics'/>
					<img onClick={() => {navigate('/marca/wilson')}} className={styles.logo} src='https://i.imgur.com/dCoxQpf.png' alt='Logo Wilson'/>
					<img onClick={() => {navigate('/marca/adidas')}} className={`${styles.logo} ${styles.lastLogo}`} src='https://i.imgur.com/OCqxTH0.png' alt='Logo Adidas'/>
        </div>
        <IoIosArrowForward
          className={styles.arrowRight}
          onClick={handleRightClick}
        />
			</div>

			<div className={styles.containerCards}>
				<ImagesBrowsingCard navigate='marca' sport='puma' link='https://i.imgur.com/szq1zLD.png' title='PUMA' descrition='Confira os melhores produtos da Puma !'/>
				<ImagesBrowsingCard navigate='marca' sport='nike' link='https://i.imgur.com/AnT0I2S.png' title='NIKE' descrition='Confira os melhores produtos da Nike !'/>
				<ImagesBrowsingCard navigate='marca' sport='adidas' link='https://i.imgur.com/2e6wb8R.png' title='ADIDAS' descrition='Confira os melhores produtos da Adidas !'/>
			</div>

			<div className={styles.containerCardsMobile}>
				<img src='https://i.imgur.com/XKfWMGs.png' alt='Card Puma'/>
				<img src='https://i.imgur.com/j94vfCd.png' alt='Card Nike'/>
				<img src='https://i.imgur.com/Dm9fRls.png' alt='Card Adidas'/>
			</div>
		</div>
	)
}
