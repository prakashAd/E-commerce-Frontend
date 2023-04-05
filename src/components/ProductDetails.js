import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { getProductDetails } from "../api/productapi";
import { API } from "../config";
import { add_item_to_cart } from "./reducers/cartActions";
import Navbar from "./layouts/Navbar";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    getProductDetails(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
      }
    });
  }, []);
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(add_item_to_cart(id,1))
    swal("congratulations"," You have Successfully added items to your cart","success")

  }
  return (
    <>
      <Navbar />
      <div className="container my-5 shadow-lg p-5 m-auto">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`${API}/${product.product_image}`}
              alt={product.product_image}
              className="w-100"
            />
          </div>
          <div className="col-md-6">
            <h3>
              <u> Product Details</u>
            </h3>
            <h3> {product.product_name}</h3>
            <h4> RS.{product.product_price}</h4>
            <h4> In Stock:{product.product_in_stock}</h4>
            <p className="fs-4">Description:{product.product_description}</p>
            <h4>
              {" "}
              Rating:
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                size={"large"}
              />
            </h4>

            <button className="btn btn-warning" onClick={handleSubmit}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
