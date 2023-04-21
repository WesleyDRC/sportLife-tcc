import React, { useState } from "react";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import useCart from '../../../hooks/useCart';

function PaymentButton() {

	const { cart } = useCart();

  const [isPaid, setIsPaid] = useState(false);

  const paypalOptions = {
    "client-id": "ATl183MGhPezfeBR8JQF38yzfT1-TyjZoWxbNIlUmOcdUnJ4uZX_NTARquf6PUfp3F-NuIGeDcNMGO4l",
    currency: "BRL",
    intent: "capture",
    activeFunding: "",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({

    });
  };

    return (
      <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons style={{ layout: "horizontal", color: 'blue' }} createOrder={(data, actions) => {
          return actions.order.create({
            "intent": "CAPTURE",
            "purchase_units": [
              {
                "amount": {
                  "currency_code": "BRL",
                  "value": "100.00"
                },
                "items": [
                  {
                    "name": "Item 1",
                    "description": "Descrição do item 1",
                    "unit_amount": {
                      "currency_code": "BRL",
                      "value": "50.00"
                    },
                    "quantity": "1"
                  },
                  {
                    "name": "Item 2",
                    "description": "Descrição do item 2",
                    "unit_amount": {
                      "currency_code": "BRL",
                      "value": "25.00"
                    },
                    "quantity": "2"
                  }
                ]
              }
            ],
            "application_context": {
              "return_url": "https://example.com/return",
              "cancel_url": "https://example.com/cancel"
            }
          });
        }} onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Pagamento aprovado com sucesso!");
          });
        }} />
      </PayPalScriptProvider>
    );

}

export default PaymentButton;
