import styles from './CardProduct.module.css'

import { useEffect, useState } from 'react'

import ProductCheckout from './ProductCheckout'

import useCart from '../../../hooks/useCart'

export default function CardProduct () {
  const { getCartUser, openCart } = useCart()
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function fetchData () {
      const result = await getCartUser()
      setCart(result.data.cart)
    }
    fetchData()
  }, [openCart])

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
          {cart.length > 0 &&
            cart[0].items.length > 0 &&
            cart[0].items.map(item => (
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
