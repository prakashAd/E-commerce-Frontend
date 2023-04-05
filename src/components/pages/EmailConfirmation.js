import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emailConfirmation } from '../../api/userApi'
import Navbar from '../layouts/Navbar'

const EmailConfirmation = () => {
    let [error,setError] = useState('')
    let [success,setSuccess] = useState('')

    //get  token from url
    let params = useParams()
    let token = params.token
    

    useEffect(()=>{
        emailConfirmation(token)
        .then(data=>{
            if(data.error){
            
            
            setError(data.error)
        }
        else{
            setSuccess(data.message)
        }
        })
    },[])
    
  const showError =()=>{
    if(error){
      return <div className="alert alert-danger">{error}
      <Link to ='/signin'>Login</Link>
      </div>
    }
  }
  
  const showSuccess =()=>{
    if(success){
      return <div className="alert alert-success">{success}
      <Link to ='/signin'>Login</Link>
      </div>
    }
  }
  return (

    <>
      <Navbar />
      {showError()}
      {showSuccess()}
       </>
    
  )

}

export default EmailConfirmation
