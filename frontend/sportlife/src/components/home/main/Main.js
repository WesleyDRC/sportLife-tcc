import { useEffect, useState } from "react";
import AxiosRepository from "../../../repository/AxiosRepository";

import Carousel from "./components/Carousel";
import Promotions from "./components/Promotions";
import CarouselProduct from "./components/CarouselProduct";
import InfoBox from "./components/InfoBox";
import NavigationImage from "./components/navigationImage";
import NavigationBrand from "./components/NavigationBrand";

import styles from "./Main.module.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AxiosRepository.findAll({order:'views'}).then((resp) => {
      setProducts(resp.data);
      setLoading(false)
    }).catch((error) => {setLoading(false)
      console.log(error)});
  }, []);
  return (
    <main className={styles.container}>
      <Carousel />
      <Promotions />
      <CarouselProduct loading={loading} products={products} titleCarousel="MAIS VISTOS" />
      <NavigationImage />
      <CarouselProduct loading={loading} products={products} titleCarousel="LANÇAMENTOS" />
      <NavigationBrand />
      <CarouselProduct loading={loading} products={products} titleCarousel="VOCÊ PODE GOSTAR" />
      <InfoBox />
    </main>
  );
}
