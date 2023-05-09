import { createContext, useState } from 'react'

import AxiosRepository from '../repository/AxiosRepository'

import { toast } from 'react-toastify'

import useEditProduct from '../hooks/useEditProduct'

import useAuth from '../hooks/useAuth'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState([])
  const [size, setSize] = useState('')
  const [infosCart, setInfosCart] = useState([])
  const [productsCart, setProductsCart] = useState([])

  const [total, setTotal] = useState(0)
  let [subTotal, setSubTotal] = useState(0)
  let [priceShipping, setPriceShipping] = useState(0)
  const [activatePayPalButton, setActivatePayPalButton] = useState(true)
  const [addressee, setAddressee] = useState("")

  const [key, setKey] = useState(Date.now())

  const { manupilationEditProductClose } = useEditProduct()

  const { authenticated } = useAuth()

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

  const notify = message => {
    toast(message)
  }

  const addItem = async (productId, quantity, size) => {
    try {
      if (size === '') {
        notify('Escolha o tamanho do seu produto')
        return
      }
      if (!authenticated) {
        notify(
          'É necessário criar uma conta para adicionar produtos ao carrinho!'
        )
        return
      }
      manupilationCartOpen()
      const response = await AxiosRepository.addItemCart(
        productId,
        quantity,
        size
      )
      await getCartUser()
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
      setInfosCart(response)
      setCart(response.data.cart)
      setSubTotal(response.data.cart[0].totalAmount)
      setProductsCart(response.data.cart[0].items)
      setKey(Date.now());
      return
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

  const updateProductById = async (productId, quantity, size) => {
    try {
      const response = await AxiosRepository.updateProductById(
        productId,
        quantity,
        size
      )

      manupilationEditProductClose()

      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = 'no'
      document.body.style.pointerEvents = 'none'

      await getCartUser()

      notify('Produto atualizado com sucesso !')

      setTimeout(() => {
        window.location.reload()
      }, 1000)

      return response
    } catch (error) {
      console.log(error)
    }
  }

  const calculateShippingPrice = async cep => {
    const response = await AxiosRepository.calculateShippingPrice(cep)
    setPriceShipping(response.data[0].Valor)
    setKey(Date.now());
    return response
  }

  const totalOrder = (subTotal, priceShipping) => {
    setTotal(subTotal + priceShipping)
  }
  const checkCheckout = ({ subTotal, total, shippingValue, addressee}) => {
    setKey(Date.now());
    if (!subTotal) {
      notify('Não foi possível carregar o valor de subTotal')
      return
    }
    if (!shippingValue) {
      notify('Não foi possível carregar o valor de shippingValue')
      return
    }
    if (!total) {
      notify('Não foi possível carregar o valor de total')
      return
    }
    if (!addressee) {
      notify('Você precisa preêncher o seu nome!')
      return
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
        productsCart,
        notify,
        calculateShippingPrice,
        subTotal,
        priceShipping,
        totalOrder,
        checkCheckout,
        setActivatePayPalButton,
        activatePayPalButton,
        setAddressee,
        addressee,
        key,
        setKey
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
