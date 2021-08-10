import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function Subtotal() {
  const [{basket},dispatch] = useStateValue();
   const createOrder = (data, actions)=> {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value:getBasketTotal(basket),
          },
        },
      ],
     
    });
  }

  const onApprove= (data, actions) =>  {
    return actions.order.capture();    
  }
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />     
      
      <PayPalButton className="subtotal__button"
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />    
       
        </div>
    )
}

export default Subtotal
