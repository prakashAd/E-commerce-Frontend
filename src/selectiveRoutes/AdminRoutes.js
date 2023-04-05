import React from 'react'
import{Outlet, Navigate} from 'react-router-dom'
import {isAuthenticated } from '../api/userApi'

const AdminRoutes = () => {
  return (
    <>
    {
        (isAuthenticated() && isAuthenticated().user.role === 1) ? <Outlet/> : <Navigate to={'/signin'}/>
    }
    </>

  )
}

export default AdminRoutes
