import styles from './Summary.module.css'

import useCart from '../../../hooks/useCart'

import priceBRL from '../../../utils/formatPrice'

import PaymentButton from './PaymentButton'

export default function Summary () {
  const { subTotal,priceShipping, total, setTotal } = useCart()

  return (
    <div className={styles.container}>
      <h2>resumo da compra</h2>
      <div className={styles.subTotal}>
        <p>sub-total</p>
        <p>{priceBRL(subTotal)}</p>
      </div>
      <div className={styles.delivery}>
        <p>entrega</p>
        <p>{priceBRL(priceShipping)}</p>
      </div>
      <div className={styles.total}>
        <p>total</p>
        <p className={styles.priceTotal}>
          {priceBRL(total)}
        </p>
      </div>

      {subTotal !== '1.00' && total !== '1.00' ? <PaymentButton /> : ''}
    </div>
  )
}
