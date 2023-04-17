import styles from "./ProductCart.module.css";

import {BsTrash3} from "react-icons/bs";

import priceBRL from '../../../../utils/formatPrice'

export default function ProductCart({urlImg, name, quantity, price, size}) {
  return (
    <div className={styles.item}>
      <div className={styles.imageItem}>
        <img
          src={urlImg}
          alt="Imagem do produto"
        />
      </div>
      <div className={styles.infosItem}>
        <p className={styles.nameItem}>
         <span className={styles.quantity}>{quantity}x </span> {name}
        </p>
        <BsTrash3 className={styles.trashIcon} />
        <p className={styles.sizeItem}>Tamanho: {size}</p>
        <p className={styles.priceItem}>{priceBRL(price)}</p>
      </div>
    </div>
  );
}
