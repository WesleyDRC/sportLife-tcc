import { useEffect, useState } from "react";
import AxiosRepository from "../../../repository/AxiosRepository";

import Carousel from "./components/Carousel";
import Promotions from "./components/Promotions";
import CarouselProduct from "./components/CarouselProduct";
import InfoBox from "./components/InfoBox";

import styles from "./Main.module.css";

export default function Main() {
  const [products, setProducts] = useState();
  useEffect(() => {
    AxiosRepository.findAll().then((resp) => {
      setProducts(resp.data);
    });
  }, []);
  return (
    <main className={styles.container}>
      <Carousel />
      <Promotions />
      <CarouselProduct products={products} titleCarousel="MAIS VISTOS" />
      <CarouselProduct products={products} titleCarousel="LANÇAMENTOS" />
      <InfoBox />
    </main>
  );
}
