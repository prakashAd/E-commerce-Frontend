import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/userApi";
import storeimage from '../../online pasal image/images.png'

function Navbar() {
  let {user} = isAuthenticated()
  let navigate = useNavigate()

  const handleSignout=()=>{
    signout()
    .then(()=>{
      localStorage.removeItem('jwt')
      navigate('/')
    })
  }

  const cart_items = useSelector(state=>state.cart.cart_items)
  const cart_items_length = cart_items.length
  return (
    <>
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-3 text-center ">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/"> Online Pasal</Link>
          <span>
        <img className="mb-4" src={storeimage} alt="store image"width="72"height="57"/>
        </span>
        </div>
        <div className="col-md-6 py-1">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-md-3 d-flex justify-content-evenly">
          {
            !user && 
            <>
            <Link to ='/signin'><i className='bi bi-box-arrow-in-left text-white fs-3'></i></Link>
            <Link to ='/register'><i className='bi bi-person-plus text-white fs-3'></i></Link>
            </>
          
          }
        {
          user && user.role === 0 &&
          <>
          <Link to ='/user/profile'><i className='bi bi-person-circle text-white fs-3'></i></Link>
          </>
        }
          {
            user && user.role === 1 &&
            <>
            <Link to ='/admin/dashboard'><i className='bi bi-speedometer text-white fs-3'></i></Link>
            </>
          }
          {
          (!user || (user && user.role ===0)) &&
          <Link to ='/cart' className="position-relative"><i className='bi bi-cart text-white fs-3'> </i>
          {
            cart_items_length > 0 &&
          <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger">
          {cart_items_length}
          <span className="visually-hidden">unread messages</span>
          </span>
          }
      </Link>
          }
          {
            user &&
            <span onClick={handleSignout} role ="button"><i className="bi bi-box-arrow-right text-white fs-3"></i></span>
          }  
          </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

              <Link className="nav-link" to="/faq">
                FAQ
              </Link>

              <Link className="nav-link" to="/about">
                About 
              </Link>


              <Link className="nav-link" to="/contact">
                Contact
              </Link>

          </ul>
        </div>
      </div>
    </nav>
  </>
  );
}

export default Navbar;


