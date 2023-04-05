import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { placeOrder } from "../../api/ordersApi";
import { processPayment } from "../../api/paymentApi";
import { isAuthenticated } from "../../api/userApi";
import Navbar from "../layouts/Navbar";

const Payment = () => {
  let stripe = useStripe();
  let elements = useElements();
  let { user, token } = isAuthenticated();

  let shipping_info = useSelector(state => state.cart.shipping_info);  
  //reducer bata leko
  let cart_items = useSelector(state => state.cart.cart_items);
  let navigate = useNavigate();

  let order_info = {
    OrderItems: cart_items,
    user: user._id,
    shipping_address: shipping_info.shipping_address,
    alternate_shipping_address: shipping_info.alternate_shipping_address,
    city: shipping_info.city,
    zipcode: shipping_info.Zip_code,
    country: shipping_info.country,
    phone: shipping_info.Phone,
  };
  //object creation

  const makePayment = async (e) => {
    e.preventDefault();
    document.querySelector("#payBtn").disabled = true;

    let amount = JSON.parse(
      sessionStorage.getItem("order_summary")
    ).order_total;
    try {
      //process payment
      let res = await processPayment(amount * 100);

      let client_secret = await res.client_secret;
      // console.log(client_secret);
      if (!stripe || !elements) {
        document.querySelector("#payBtn").disabled = false;

        return;
      }
      let result = await stripe.confirmCardPayment(`${client_secret}`, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.username,
            email: user.email,
          },
        },
      });
      if (result.error) {
        swal("error", result.error, "error");
        document.querySelector("#payBtn").disabled = false;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order_info.payment_info = {
            _id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          //placeorder

          placeOrder(order_info, token).then(data => {
            if (data.error) {
              swal("error", data.error, "error");
              document.querySelector("#patBtn").disabled = false;
              return;
            }
            else{

              localStorage.removeItem("cart_items");
              //remove data(cart_items) from localstorage
              document.querySelector("#payBtn").disabled = false;
  
                  //navigate to payment success page
                 navigate("/paymentsuccess");
            }
          });
        }
      }
    } catch (error) {
      document.querySelector("#payBtn").disabled = false;
      swal("error", error.message, "error");
    }
    //  console.log(res)
  };
  return (
    <>
      <Navbar />

      <div className="container-fluid  d-flex">
        <div className="w-75">Cart Information shipping Information</div>
        <div className="w-25 m-5 p-3 shadow-lg">
          <h4> Card Information</h4>
          <label for="card-number">Card Number</label>
          <CardNumberElement className="form-control mb-2" id="card-number" />
          <label for="card-expiry">Valid Upto</label>
          <CardExpiryElement
            className="form-control mb-2 w-50"
            id="card-expiry"
          />
          <label for="cvc">CVC </label>
          <CardCvcElement className="form-control mb-2 w-50" id="cvc" />
          <button className="btn btn-warning" onClick={makePayment} id="payBtn">
            {" "}
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
