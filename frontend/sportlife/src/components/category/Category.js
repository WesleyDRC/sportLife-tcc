import styles from "./Category.module.css";

import Card from "./components/Card";

import priceBRL from "../../utils/formatPrice";

import Loading from "../home/main/components/Loading";

import { useParams } from "react-router-dom";

export default function Category(props) {
  let { name, esporte, brand } = useParams();

  return (
    <div className={styles.container}>
      <p className={props.products && props.products.length > 0 ? styles.on : styles.off}>{`${name || esporte || brand}`} ({props.products.length})</p>
      <div className={styles.subContainer}>
        {props.products && props.products.length > 0 ? (
          props.products.map((item, i) => (
            <Card
              key={item.id}
              id={props.products[i].id}
              src={props.products[i].imageMain}
              name={props.products[i].name}
              sexo={props.products[i].sexo}
              category={props.products[i].categories.name}
              price={priceBRL(props.products[i].price)}
            />
          ))
        ) : (
          <div className={styles.noResult}>
            <p>Não foi encontrado nenhum resultado para "{`${name || esporte}`}".</p>
            <p className={styles.otherProducts}>Tente buscar por outros produtos!</p>
          </div>
        )}
        {props.loading && <Loading />}
      </div>
    </div>
  );
}
