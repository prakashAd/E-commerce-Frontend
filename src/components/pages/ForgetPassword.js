import React, { useState } from 'react'
import { forgetPassword } from '../../api/userApi'
import Navbar from '../layouts/Navbar'

const ForgetPassword = () => {
    let [email,setEmail]=useState('')
    let [success,setSuccess]=useState('')
    let [error,setError]=useState('')

const handleSubmit =(e)=>{
    e.preventDefault()
    forgetPassword(email)
    .then(data =>{
        if(data.error){
            setError(data.error)
            setSuccess('')

        }
        else{
            setSuccess(data.message)
            setError('')
        }
    })
}
 
  const showError =()=>{
    if(error){
      return <div className="alert alert-danger">{error}</div>
    }
  }
  
  const showSuccess =()=>{
    if(success){
      return <div className="alert alert-success">{success}
      </div>
    }
  }
  return (
    <>
    <Navbar/>
    {showError}
    {showSuccess}
    <form className='w-50 my-5 p-5 m-auto shadow-lg'>

<label htmlFor='email'>Email</label>
<input type ='text' id ='email' className='form-control' onChange={e=>setEmail(e.target.value)}></input>
<button  className='btn btn-warning w-100 mt-3' onClick={handleSubmit}>ForgetPassword</button>
        </form>

    </>
  )
}

export default ForgetPassword