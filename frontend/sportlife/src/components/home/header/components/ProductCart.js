import styles from "./ProductCart.module.css";

import {BsTrash3} from "react-icons/bs";

import priceBRL from '../../../../utils/formatPrice'

import useCart from '../../../../hooks/useCart';

export default function ProductCart({urlImg, name, quantity, price, size, product}) {
  const { deleteProduct } = useCart();
  return (
    <div className={styles.item} data_product={JSON.stringify(product)}>
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
        <div>
          <BsTrash3 onClick={deleteProduct} className={styles.trashIcon} />
        </div>
        <p className={styles.sizeItem}>Tamanho: {size}</p>
        <p className={styles.priceItem}>{priceBRL(price)}</p>
      </div>
    </div>
  );
}
