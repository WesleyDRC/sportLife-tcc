import styles from "./ProductCart.module.css";

import {BsTrash3} from "react-icons/bs";

export default function ProductCart() {
  return (
    <div className={styles.item}>
      <div className={styles.imageItem}>
        <img
          src="https://imgnike-a.akamaihd.net/768x768/024315ID.jpg"
          alt="peita"
        />
      </div>
      <div className={styles.infosItem}>
        <p className={styles.nameItem}>
          Camiseta Nike Corinthians Academy Pro Masculina
        </p>
        <BsTrash3 className={styles.trashIcon} />
        <p className={styles.sizeItem}>Tamanho: M</p>
        <p className={styles.priceItem}>R$199,00</p>
      </div>
    </div>
  );
}
