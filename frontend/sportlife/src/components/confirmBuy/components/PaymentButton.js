import React, { useState, useEffect, useLayoutEffect } from 'react'

import { useNavigate, use } from 'react-router-dom'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

import useCart from '../../../hooks/useCart'

import axios from 'axios'

function PaymentButton () {
  const { total, productsCart } = useCart()
  const navigate = useNavigate()

  let amount = {
    currency_code: 'BRL',
    value: total,
    breakdown: {
      item_total: {
        currency_code: 'BRL',
        value: total
      }
    }
  }

  const paypalOptions = {
    'client-id': process.env.REACT_APP_CLIENT_ID,
    currency: 'BRL',
    intent: 'capture',
    activeFunding: ''
  }

  const productsPayPal = productsCart.map(product => {
    return {
      name: product.name,
      description: 'Wesley',
      quantity: product.quantity,
      unit_amount: {
        currency_code: 'BRL',
        value: product.price
      }
    }
  })

  const cartProducts = productsCart.map(product => {
    return {
      id: product.id,
      quantity: product.quantity
    }
  })

  const dataProducts = { products: cartProducts }

  async function createOrder (data, actions) {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: amount,
          items: productsPayPal
        }
      ],
      application_context: {
        brand_name: 'My Store',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        return_url: 'https://example.com/return',
        cancel_url: 'https://example.com/cancel'
      }
    })
  }

  async function onApprove (data, actions) {
    await actions.order.capture()

    var userToken = localStorage.getItem('user_token')

    const AuthStr = `Bearer ${JSON.parse(userToken)}`

    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/order`, dataProducts, {
        headers: {
          Authorization: AuthStr
        }
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
