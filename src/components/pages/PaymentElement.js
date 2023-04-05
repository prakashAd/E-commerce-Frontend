import { Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { getStripeKey } from '../../api/paymentApi'
import Payment from './Payment'

const PaymentElement = () => {

    const[stripekey, setStripeKey] = useState('')
    useEffect(()=>{
        getStripeKey()
        .then(data=>{
            setStripeKey(data.stripeAPIKey)
        })
    },[])
  return (

    <>
   {stripekey &&
    
    <Elements stripe = {loadStripe(stripekey)}> 
        <Payment></Payment>
        </Elements>
}
    
    </>
  )
}

export default PaymentElement