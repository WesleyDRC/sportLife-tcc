import styles from "./Category.module.css";
import Card from "./components/Card";
import priceBRL from "../../utils/formatPrice";

import AxiosRepository from "../../repository/AxiosRepository";

import { useState, useEffect } from "react";

import Loading from "../home/main/components/Loading";

export default function Category(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AxiosRepository.findAll({ order: "views" })
      .then((resp) => {
        setProducts(resp.data);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.container}>
      {products &&
        products.length > 0 &&
        products.map((item, i) => (
          <Card
            key={item.id}
            id={products[i].id}
            src={products[i].imageMain}
            name={products[i].name}
            sexo={products[i].sexo}
            category={products[i].categories.name}
            price={priceBRL(products[i].price)}
          />
        ))}
      {loading && <Loading />}
    </div>
  );
}
