import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCategory from './components/layouts/AddCategory'
import AddProduct from './components/layouts/AddProduct'
import AdminCategory from './components/layouts/AdminCategory'
import Adminsidebar from './components/layouts/Adminsidebar'
import AdminUser from './components/layouts/AdminUser'
import Footer from './components/layouts/footer'
import UpdateCategory from './components/layouts/UpdateCategory'
import UpdateProduct from './components/layouts/UpdateProduct'
import About from './components/pages/About'
import AdminDashboard from './components/pages/AdminDashboard'
import AdminProducts from './components/pages/AdminProducts'
import Cart from './components/pages/Cart'
import Contact from './components/pages/Contact'
import EmailConfirmation from './components/pages/EmailConfirmation'
import FAQ from './components/pages/FAQ'
import ForgetPassword from './components/pages/ForgetPassword'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import PaymentElement from './components/pages/PaymentElement'
import PaymentSuccess from './components/pages/PaymentSuccess'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import ResetPassword from './components/pages/ResetPassword'
import Shipping from './components/pages/Shipping'
import UserProfile from './components/pages/UserProfile'
import ProductDetails from './components/ProductDetails'
import AdminRoutes from './selectiveRoutes/AdminRoutes'
import PublicRoutes from './selectiveRoutes/PublicRoutes'




function Myroutes() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path ='/' element ={<Home/>}></Route>
    <Route path ='/signin' element ={<Login/>}></Route>
    <Route path ='/register' element ={<Register/>}></Route>
    <Route path ='/faq' element ={<FAQ/>}></Route>
    <Route path ='/about' element ={<About/>}></Route>
    <Route path ='/contact' element ={<Contact/>}></Route>
    <Route path ='/products' element ={<Products/>}></Route>
    <Route path ='/verifyEmail/:token' element ={<EmailConfirmation/>}></Route>
    <Route path ='/forgetpassword' element = {<ForgetPassword/>}></Route>
    <Route path ='/resetpassword/:token' element = {<ResetPassword/>}></Route>
    <Route path ='/signin' element = {<Login/>}></Route>

    <Route path='/' element={<AdminRoutes/>}>
    <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
    <Route path ='/admin/category' element={<AdminCategory/>}></Route>
    <Route path ='/admin/category/add' element ={<AddCategory/>}></Route>
    <Route path ='/admin/category/update/:id' element ={<UpdateCategory/>}></Route>
    <Route path ='/admin/products' element ={<AdminProducts/>}></Route>
    <Route path ='/admin/product/add' element ={<AddProduct/>}></Route>
    <Route path ='/admin/product/update/:id' element={<UpdateProduct/>}></Route>
    <Route path ='/admin/users' element={<AdminUser/>}></Route>

    </Route>

    <Route path ='/' element ={<PublicRoutes/>}>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path ='/product/:id' element={<ProductDetails/>}></Route>
    <Route path ='/shipping' element={<Shipping/>}></Route>
    <Route path ='/payment' element={<PaymentElement/>}></Route>
    <Route path ='/paymentsuccess' element={<PaymentSuccess/>}></Route>
    <Route path ='/user/profile' element={<UserProfile/>}></Route>


   </Route>

    
    
    // {/* <Route path ='/info' element ={<Data/>}></Route> */}


    //  {/*hooks*/}



   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default Myroutes