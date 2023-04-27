import styles from './CardProduct.module.css'

import { useEffect, useState } from 'react'

import ProductCheckout from './ProductCheckout'

import useCart from '../../../hooks/useCart'
import useAuth from '../../../hooks/useAuth'

export default function CardProduct () {
  const { getCartUser, infosCart } = useCart()
  const { authenticated } = useAuth()

  useEffect(() => {
    async function fetchData () {
      const result = await getCartUser()
    }
    fetchData()
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.tableProducts}>
        <div className={styles.titles}>
          <p className={styles.titleProduct}>produto</p>
          <p className={styles.titlePrice}>preço</p>
          <p className={styles.titleAction}>ações</p>
          <p className={styles.titleProductInfos}>produtos e informações</p>
        </div>
        <div className={styles.listProducts}>
          {authenticated && infosCart.data && infosCart.data.cart[0].items.length > 0 &&
            infosCart.data.cart[0].items.map(item => (
              <ProductCheckout
                key={item.id}
                id={item.id}
                url={item.imageMain}
                name={item.name}
                price={item.price}
                size={item.size}
                quantity={item.quantity}
                product={item}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
