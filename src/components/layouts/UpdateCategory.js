import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getcategoryDetails, updatecategory } from "../../api/categoryapi";
import { addCategory } from "../../api/categoryapi";
import { deleteCategory } from "../../api/categoryapi";
import { isAuthenticated } from "../../api/userApi";
import Adminsidebar from "../layouts/Adminsidebar";
import Navbar from "../layouts/Navbar";

const UpdateCategory= () => {
    let[category_name,setCategoryName] = useState('')
    let {token} = isAuthenticated()
    let[error,setError] =useState('')
    let[success,setSuccess] =useState(false)

    let{id} = useParams()

    useEffect(()=>{
        getcategoryDetails(id).then(data=>setCategoryName(data.category_name))
    },[])
    
    const handleSubmit = e =>{
        e.preventDefault()
        updatecategory(id,category_name,token)
        // addCategory(category_name,token)
        .then(data=>{

            if(data.error){
                setError(data.error)
                // toast.error("Category already exist")
                setSuccess(false)



            }
            else{
                setSuccess(true)
                setError('')
                toast.success("Category added succesfully")
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
                return <div className="alert alert-success">Category Updated Successfully.</div>
              }
          }
           

  return (
    <>
     
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminsidebar category/>
          </div>

          <div className="col-md-9 ">
            <h2>Update category</h2>
            {/* {showSuccess()} */}
            {showError()}
            <ToastContainer theme="colored" position="top-right"></ToastContainer>
            <form className="p-5 mt-3 shadow-lg"></form>
            <label htmlFor="category_name">Category Name</label>
            <input type={'text'} id='category_name' className="form-control" onChange={e=>setCategoryName(e.target.value)} value={category_name}></input>
                <button className="btn btn-warning w-100 mt-3" onClick={handleSubmit}>Add New Category</button>
                <Link to ='/admin/category'>Return back</Link>
          </div> 
        </div>
      </div>
    </>
  );
  }

export default UpdateCategory
