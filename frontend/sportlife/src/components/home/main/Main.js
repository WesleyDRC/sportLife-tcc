import { useEffect, useState } from "react";
import AxiosRepository from "../../../repository/AxiosRepository";

import styles from "./Main.module.css";
import Carousel from "./components/Carousel";
import CarouselProduct from "./components/CarouselProduct";
import InfoBox from "./components/InfoBox";
import CircleNavigate from "./components/CircleNavigate"
import NavigationBrand from "./components/NavigationBrand";
import ImageBrowsing from "./components/ImageBrowsing";

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
      <div className={styles.subContainer}>
        <InfoBox />
        <CircleNavigate />
        <CarouselProduct loading={loading} products={products} titleCarousel="MAIS VISTOS" />
        <ImageBrowsing />
        <CarouselProduct loading={loading} products={products} titleCarousel="LANÇAMENTOS" />
        <NavigationBrand />
        <CarouselProduct loading={loading} products={products} titleCarousel="VOCÊ PODE GOSTAR" />
      </div>
    </main>
  );
}
