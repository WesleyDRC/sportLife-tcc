import styles from './ImageBrowsing.module.css';

import { useRef } from 'react';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ImageBrowsing(){
  const Carousel = useRef(null);

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
			<p className={styles.title}>Navegue por esportes</p>
			<div className={styles.photos}>
				<img className={styles.img1} src='https://i.imgur.com/lU9oI6w.png' alt='soccer'/>
				<img className={styles.img2} src='https://i.imgur.com/OZbIsnt.png' alt='basketball'/>
				<img className={styles.img3} src='https://i.imgur.com/gaPtsCX.png' alt='running'/>
				<img className={styles.img4} src='https://i.imgur.com/CV0Xe9h.png' alt='volleyball'/>
			</div>

			<div className={styles.carousel}>
        <IoIosArrowBack
          className={styles.arrowLeft}
          onClick={handleLeftClick}
        />
        <div className={styles.promotions} ref={Carousel}>
					<img className={styles.img1} src='https://i.imgur.com/lU9oI6w.png' alt='soccer'/>
					<img className={styles.img2} src='https://i.imgur.com/OZbIsnt.png' alt='basketball'/>
					<img className={styles.img3} src='https://i.imgur.com/gaPtsCX.png' alt='running'/>
					<img className={styles.img4} src='https://i.imgur.com/CV0Xe9h.png' alt='volleyball'/>
        </div>
        <IoIosArrowForward
          className={styles.arrowRight}
          onClick={handleRightClick}
        />
			</div>
		</div>
	)
}
