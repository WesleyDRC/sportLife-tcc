import { createContext, useState } from 'react'

import AxiosRepository from '../repository/AxiosRepository'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState([])
  let [total, setTotal] = useState('1.00')

  const manupilationCartOpen = () => {
    window.scrollTo(0, 0)
    setOpenCart(true)
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no'
  }

  const manupilationCartClose = () => {
    setOpenCart(false)
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes'
  }

  const addItem = async (productId, quantity, size) => {
    try {
      manupilationCartOpen()
      const response = await AxiosRepository.addItemCart(
        productId,
        quantity,
        size
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const getCartUser = async () => {
    try {
      return await AxiosRepository.getCartUser()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = e => {
    const tr = e.target.parentNode.parentNode.parentNode
    const dataProduct = JSON.parse(tr.getAttribute('data_product'))
    if (window.confirm(`Deseja mesmo excluir o produto ${dataProduct.name}?`)) {
      AxiosRepository.deleteProductCart(dataProduct.id).then(async () => {
        await getCartUser()
      })
    }
  }

  const deleteProductCheckout = e => {
    const tr = e.target.parentNode.parentNode
    const dataProduct = JSON.parse(tr.getAttribute('data_product'))
    if (window.confirm(`Deseja mesmo excluir o produto ${dataProduct.name}?`)) {
      AxiosRepository.deleteProductCart(dataProduct.id).then(async () => {
        await getCartUser()
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        manupilationCartOpen,
        manupilationCartClose,
        openCart,
        setOpenCart,
        addItem,
        getCartUser,
        deleteProduct,
        deleteProductCheckout,
        cart,
        setCart,
        setTotal,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
