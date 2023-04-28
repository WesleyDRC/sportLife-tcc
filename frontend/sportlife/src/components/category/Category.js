import styles from "./Category.module.css";
import Card from "./components/Card";
import priceBRL from "../../utils/formatPrice";

import Loading from "../home/main/components/Loading";

export default function Category(props) {
  return (
    <div className={styles.container}>
      {props.products &&
        props.products.length > 0 &&
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
        ))}
      {props.loading && <Loading />}
    </div>
  );
}
