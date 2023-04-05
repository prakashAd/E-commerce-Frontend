import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import swal from 'sweetalert'
import { getAllCategories } from '../../api/categoryapi'
import { deleteProduct, getProductDetails, updateProduct } from '../../api/productapi'
import { isAuthenticated } from '../../api/userApi'
import { API } from '../../config'
import Adminsidebar from './Adminsidebar'
import Navbar from './Navbar'

const UpdateProduct = () => {
    const [categories,setCategories] = useState([])
    const{token} = isAuthenticated()
    const[success,setSuccess] = useState(false)
    const [product,setProduct] = useState({
      product_name: '',
      product_price:'',
      product_description:'',
      product_in_stock:'',
      product_image:'',
      category:'',
      error:'',
      success:false,
      formdata:new FormData,
      })

      let sel_ref = useRef()
      let file_ref= useRef()
      const {id} = useParams()
  
      const {product_name,product_price,product_description,product_in_stock,error,formdata,product_image} = product
  
    useEffect(()=>{
      getAllCategories()
      .then(data=>setCategories(data))
      getProductDetails(id)
      .then(data=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            
            setProduct({...product,...data,formdata:new FormData})
            sel_ref.current.value = data.category._id
        }
      })

    },[success])

    const handleChange = name => e=>{
      let value 
      if (name === 'product_image') {
        value = e.target.files[0]
      }
      else{
        value = e.target.value
        setProduct({...product,[name]: value}) 
      }
      formdata.set(name, value)
  

    }
    
    const handleSubmit = e => {
      e.preventDefault()
      updateProduct(id,formdata,token)
      .then(data=>{
        if(data.error){
          setProduct({...product,error:data.error,success:false})
  
        }
        else{
          setProduct({success: true, error:''})
      
        }
      })
  
    }
    const ShowError = () =>{
      if(error){
        return <div className='alert alert-danger'>{error}</div>
      }
    }
  
    const ShowSuccess = () =>{
      if(success){
        return <div className='alert alert-success'>Product Updated Successfully.<Link to ='/admin/product'>Return Back</Link></div>
      }
    }
  return (
    <>
        <Navbar/>
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-3'>
        <Adminsidebar product/>
       </div>
       <div className="col-md-9">

        <h2>Update Product</h2>

        {ShowError()}
            {ShowSuccess()}
            <div className='row'>
              <div className='col-6'>
                <img src ={`${API}/${product_image}`} className='w-100'/>
              </div>
            <div className='col-6'>
            <form className="p-5">
                <label htmlFor="product_name">Product Name</label>
                <input type='text' className='form-control mb-1' id='product_name' onChange={handleChange('product_name')} value={product_name}
                 ></input>
                <label htmlFor="product_price">Product Price</label>
                <input type='Number' className='form-control mb-1' onChange={handleChange('product_price')} value={product_price}></input>

                <label htmlFor="product_Description"> Description</label>
                <textarea className="form-control mb-1" rows={5} id='product_descripton ' onChange={handleChange('product_description')}value={product_description}></textarea>

                <label htmlFor="count">Product in stock</label>
                <input type='number' className='form-control mb-1' onChange={handleChange('product_in_stock')} value={product_in_stock}></input>

                <label htmlFor="image">Product image</label>
                <input type='file' className='form-control mb-1' id='image' onChange={handleChange('product_image')} ref={file_ref} ></input>

                <label htmlFor="category">Category</label>
                <select id="category" className="form-control mb-1" onChange ={handleChange('category')} ref={sel_ref}>
                    <option>Select category</option>

                    {
                      categories && categories.map(cat=>{
                        return <option key = {cat._id} value={cat._id}>{cat.category_name}</option>
                      })
                    }
                </select>
              <button className="btn btn-warning w-50" onClick={handleSubmit}>Update Product</button>


            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
                  }
                  

export default UpdateProduct