import React from 'react'
import{Outlet, Navigate} from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'

const PublicRoutes = () => {
  return (
    <>
    {
       ( isAuthenticated() && isAuthenticated().user.role === 0) ? <Outlet/> : <Navigate to={'/signin'}/>
    }
    </>

  )
}

export default PublicRoutes
