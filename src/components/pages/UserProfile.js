import React, { useEffect, useState } from 'react'
import { getMyorders } from '../../api/ordersApi'
import { isAuthenticated } from '../../api/userApi'
import Navbar from '../layouts/Navbar'

const UserProfile = () => {
  const{user} = isAuthenticated()
  const[myOrders,setMyOrders]= useState([])
  useEffect(()=>{
    getMyorders(user._id)

    .then(data=>{
      console.log(data)
      setMyOrders(data)
    })
  },[])
  return (
    <>
    <Navbar/>
    <h2 className='text-end pe-5'>Welcome {user.username}</h2>
    <br/>
    <br/>
    <div className='container'>
      <h3>My orders</h3>
      <table className='table'>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Order Total</td>
            <td>Order Date</td>
            <td>Order Status</td>
          </tr>
        </thead>

      <tbody>

      {
        myOrders && myOrders.map((order,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{order.total_price}</td>
            <td>{order.createdAt}</td>
            <td>{order.status}</td>
          </tr>
        })
      }
      </tbody>
      </table>
   
      
    </div>
</>
  )
}

export default UserProfile