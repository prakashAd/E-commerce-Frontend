import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const PaymentSuccess = () => {
  return (
    <>
    <Navbar/>
    <div className='alert alert-success'>
        <h5>Your order has been placed Sucessfull. go to <Link to={'/user/profile'}>Profile</Link></h5>
    </div>
    </>
  )
}

export default PaymentSuccess