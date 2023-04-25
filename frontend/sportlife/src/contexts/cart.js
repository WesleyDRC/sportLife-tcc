import styles from '../components/product/components/ProductInfos.module.css'

import { createContext, useState } from 'react'

import AxiosRepository from '../repository/AxiosRepository'

import { toast } from 'react-toastify';

import useEditProduct from '../hooks/useEditProduct';

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState([])
  const [size, setSize] = useState('')
  const [infosCart, setInfosCart] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const {manupilationEditProductClose} = useEditProduct()
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

  const notify = (message) => { toast(message)}

  const addItem = async (productId, quantity, size) => {
    try {
      if(size === ''){
        notify('Escolha o tamanho do seu produto')
        return
      }
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

  const getCartUser = async (productId, quantity, size) => {
    try {
      const response = await AxiosRepository.getCartUser(
        productId,
        quantity,
        size
      )
      setInfosCart(response.data)
      return response
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

  const updateProductById = async (productId, quantity, size) =>{
    try{
      const response = await AxiosRepository.updateProductById(
        productId,
        quantity,
        size
      )
      manupilationEditProductClose()
      notify('Produto atualizado com sucesso !')
      await getCartUser()
      return response
    }catch(error){
      console.log(error)
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
        total,
        size,
        setSize,
        updateProductById,
        infosCart,
       setInfosCart,
       setProductsCart,
       productsCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
