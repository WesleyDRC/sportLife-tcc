import { useRef } from "react";
import styles from "./CarouselProduct.module.css";

import priceBRL from '../../../../utils/formatPrice'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Product from "./Product";

export default function CarouselProduct(props) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.titleCarousel}</p>
      <div className={styles.carousel}>
        <IoIosArrowBack
          className={styles.arrowLeft}
          onClick={handleLeftClick}
        />
        <div className={styles.promotions} ref={carousel}>
           {props.products && props.products.length > 0 ? (
            props.products.map((item,i) => (
              <Product
                key={item.id}
                id = {props.products[i].id}
								src={props.products[i].imageMain}
								name={props.products[i].name}
								price={priceBRL(props.products[i].price)}
              />
            ))
          ) : (
            <p className={styles.notfound}>
              Não há avaliações deste produto
            </p>
          )}

        </div>
        <IoIosArrowForward
          className={styles.arrowRight}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}
