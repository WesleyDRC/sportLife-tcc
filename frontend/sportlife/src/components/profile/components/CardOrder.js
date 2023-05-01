import styles from "./CardOrder.module.css";

import { ImTruck } from "react-icons/im";

import priceBRL from "../../../utils/formatPrice";

import { Link } from "react-router-dom";

export default function CardOrder(props) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link to={`/product/${props.id}`}>
          <img src={props.imageUrl} alt="imagem produto" />
        </Link>
        <div className={styles.infosContainer}>
          <div className={styles.infos}>
            <p className={styles.name}>
              {" "}
              {props.quantity}x {props.name}
            </p>
            <p>Size: {props.size}</p>
            <p>{priceBRL(props.price)}</p>
          </div>
          <div className={styles.status}>
            <div>
              <ImTruck />
              <p className={styles.statusText}>{props.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
