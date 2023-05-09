import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import axios from 'axios'

import useCart from '../../../hooks/useCart'

function PaymentButton() {
  const {
    total,
    productsCart,
    checkCheckout,
    subTotal,
    priceShipping,
    addressee,
  } = useCart()

  const navigate = useNavigate()

  const [paypalOptions, setPaypalOptions] = useState({
    'client-id': process.env.REACT_APP_CLIENT_ID,
    currency: 'BRL',
    intent: 'capture',
    activeFunding: '',
  })

  const [productsPayPal, setProductsPayPal] = useState([])

  const [cartProducts, setCartProducts] = useState([])

  const [amount, setAmount] = useState({
    currency_code: 'BRL',
    value: total,
    breakdown: {
      item_total: {
        currency_code: 'BRL',
        value: total,
      },
      shipping: {
        currency_code: 'BRL',
        value: priceShipping,
      },
    },
  })

  useEffect(() => {
    setAmount({
      currency_code: 'BRL',
      value: total,
      breakdown: {
        item_total: {
          currency_code: 'BRL',
          value: total,
        },
        shipping: {
          currency_code: 'BRL',
          value: priceShipping,
        },
      },
    })
  }, [total, priceShipping])

  useEffect(() => {
    setProductsPayPal(
      productsCart.map(product => {
        return {
          name: product.name,
          description: 'Wesley',
          quantity: product.quantity,
          unit_amount: {
            currency_code: 'BRL',
            value: product.price,
          },
        }
      })
    )

    setCartProducts(
      productsCart.map(product => {
        return {
          id: product.id,
          quantity: product.quantity,
          size: product.size,
        }
      })
    )
  }, [productsCart])

  const dataProducts = { products: cartProducts }

  async function createOrder(data, actions) {
    await checkCheckout({
      subTotal: subTotal,
      total: total,
      shippingValue: priceShipping,
      addressee: addressee,
    })

    console.log(amount)

    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: amount,
          items: productsPayPal,
        },
      ],
      application_context: {
        brand_name: 'My Store',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        return_url: 'https://example.com/return',
        cancel_url: 'https://example.com/cancel',
      },
    })
  }

  async function onApprove(data, actions) {
    await actions.order.capture()

    var userToken = localStorage.getItem('user_token')

    const AuthStr = `Bearer ${JSON.parse(userToken)}`

    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/order`, dataProducts, {
        headers: {
          Authorization: AuthStr,
        },
      })
      .then(response => {})
      .catch(error => {
        console.error(error)
      })

    navigate('/successOrder')
  }

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ layout: 'horizontal', color: 'blue' }}
        createOrder={createOrder}
        onApprove={onApprove}
        />
      </PayPalScriptProvider>
    )
  }
  
  export default PaymentButton
