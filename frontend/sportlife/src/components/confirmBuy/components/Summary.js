import styles from './Summary.module.css'

import useCart from '../../../hooks/useCart'

import priceBRL from '../../../utils/formatPrice'

import PaymentButton from './PaymentButton'
import { useEffect, useMemo} from 'react'

export default function Summary () {
  const { subTotal, priceShipping, total, totalOrder, key} = useCart()

  useEffect(() => {
    if (parseFloat(subTotal) > 0 && parseFloat(priceShipping) > 0) {
      totalOrder(parseFloat(subTotal), parseFloat(priceShipping))
    }
  }, [subTotal, priceShipping])

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
        <p className={styles.priceTotal}>{priceBRL(total)}</p>
      </div>
      <PaymentButton/>
    </div>
  )
}
