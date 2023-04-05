import { Typography } from "@mui/material";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { saveShippingInfo } from "../reducers/cartActions";
import { SAVE_SHIPPING_INFO } from "../reducers/cartConstants";

const Shipping = () => {
  const shippingInfoReducer =(state,event)=>{
    console.log(state)
    return{...state,[event.target.name]:event.target.value}
  }
  let [shipping_info,setShippingInfo] = useReducer(shippingInfoReducer,
    localStorage.getItem("shipping_info") ? JSON.parse(localStorage.getItem("shipping_info")):
    
    {})

let {contact_person,shipping_address,Alternate_shipping_address,city,country,zipcode,phone}= shipping_info
  /*
  let [state,function]= useReducer(reducer,initialData)
  */
  const dispatch = useDispatch()
  const save_shipping = (e)=>{
    e.preventDefault()
  
    dispatch(saveShippingInfo(shipping_info))
  }
  
  return (
    <>
      <Navbar />

      <div className="row">
        <div className="col-md-8">
          <h3>Shipping Information</h3>
        </div>
        <div className="col-md-4">
          <Typography
            variant="h4"
            align="center"
            paddingTop={"10px"}
            sx={{ textDecoration: "none" }}
            color="dark"
          >
            Cart Summary
          </Typography>
          <hr />
          <div className="p-3">
            <h3>No .of  Items:{
              JSON.parse(sessionStorage.getItem('order_summary')).cart_items_number
              }
            </h3>
            <h3>Order Total:Rs. {
              JSON.parse(sessionStorage.getItem('order_summary')).order_total

              }</h3>
         
          </div>

          <hr />
          {
            localStorage.getItem('shipping_info') ?
            <Link to='/payment'className="btn btn-warning w-100 mt-2">
            Procced to Payment
          </Link>
            :
            <button
            className="btn btn-warning w-100 mt-2"disabled
           
          >
            Procced to Payment
          </button>

          }
        </div>
        <form className="w-50">
          <label htmlFor="contact person">Contact Person</label>
          <input
            type={"text"}
            id="contact person"
            className="form-control" name="contact_person" onChange={setShippingInfo} value={contact_person}
          ></input>

          <label htmlFor="street">Shipping Address</label>
          <input type={"text"} id="street" className="form-control" name="shipping_address" onChange={setShippingInfo} value={shipping_address}></input>

          <label htmlFor="street"> Alterenate Shipping Address</label>
          <input type={"text"} id="street" className="form-control" name="Alternate_shipping_address" onChange={setShippingInfo} value={Alternate_shipping_address}></input>

          <label htmlFor="city">City</label>
          <input type={"text"} id="city" className="form-control" name="city" onChange={setShippingInfo} value={city}></input>

          <label htmlFor="zipcode">Zip code</label>
          <input type={"text"} id="zipcode" className="form-control" name="Zip_code" onChange={setShippingInfo}value={zipcode}></input>

          <label htmlFor="city">Country</label>
          <input type={"text"} id="city" className="form-control"name="country" onChange={setShippingInfo} value={country}></input>

          <label htmlFor="phone">Phone</label>
          <input type={"number"} id="phone" className="form-control"name="Phone" onChange={setShippingInfo} value={phone}></input>

          <button className="btn btn-warning w-100 mt-2" onClick={save_shipping}>Save Shipping info</button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
