import styles from './ShoppingCart.module.css'

import useCart from '../../../../hooks/useCart'
import useAuth from '../../../../hooks/useAuth'

import { CgClose } from 'react-icons/cg'
import { BsBag } from 'react-icons/bs'

import priceBRL from '../../../../utils/formatPrice'

import ProductCart from './ProductCart'

import { Link } from 'react-router-dom'

export default function ShoppingCart () {
  const { manupilationCartClose, setOpenCart, infosCart } = useCart()
  const { authenticated } = useAuth()

  function keepContinue () {
    window.location.href = 'https://sport-life-tcc.vercel.app/'
    setOpenCart(false)
  }

  console.log(infosCart)

  return (
    <div className={styles.container}>
      <aside>
        <header className={styles.headerCart}>
          <div className={styles.titleCart}>
            <BsBag className={styles.bagIcon} />
            <h2>Carrinho de Compras</h2>
          </div>
          <CgClose
            className={styles.closeButton}
            onClick={manupilationCartClose}
          />
        </header>

        <div className={styles.itemsCart}>
          {authenticated && infosCart.data.cart[0].items.length > 0 ? (
            infosCart.data.cart[0].items.map(item => (
              <ProductCart
                key={item.id}
                id={item.id}
                urlImg={item.imageMain}
                name={item.name}
                price={priceBRL(item.price)}
                size={item.size}
                quantity={item.quantity}
                product={item}
              />
            ))
          ) : (
            <div className={styles.emptyCart}>
              <br></br> Carrinho Vazio. Adicione <br></br>produtos para
              finalizar<br></br> uma compra!
            </div>
          )}
        </div>
        <div className={styles.finalizeOrder}>
          <div className={styles.subTotal}>
            <p>
              SUB-TOTAL (
              {authenticated && infosCart.data.cart[0].totalItems > 0
                ? ` ${infosCart.data.cart[0].totalItems} `
                : ' 0 '}
              produtos )
            </p>
            <p>
              {authenticated && infosCart.data.cart[0].totalAmount > 0
                ? priceBRL(infosCart.data.cart[0].totalAmount)
                : 0}
            </p>
          </div>
          <div className={styles.total}>
            <p>TOTAL</p>
            <p className={styles.totalPrice}>
              {authenticated && infosCart.data.cart[0].totalAmount > 0
                ? priceBRL(infosCart.data.cart[0].totalAmount)
                : 0}
            </p>
          </div>
          <Link to='/checkout'>
            <button
              disabled={authenticated && infosCart.data.cart[0].totalAmount > 0 ? true : false}
              className={styles.btn}
            >
              FINALIZAR COMPRA
            </button>
          </Link>
          <p className={styles.keepContinue} onClick={keepContinue}>
            CONTINUE COMPRANDO
          </p>
        </div>
      </aside>
    </div>
  )
}
