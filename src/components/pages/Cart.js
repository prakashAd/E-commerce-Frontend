import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { API } from "../../config";
import Navbar from "../layouts/Navbar";
import { add_item_to_cart, removeFromCart } from "../reducers/cartActions";

function Cart() {
  // function createData(name,price,image)
  //    {
  //     return {name, price, image};

  //   }

  // const rows = [
  //     createData('Samsung S22 Ultra',200000, "https://www.gadgetbytenepal.com/wp-content/uploads/2022/03/Samsung-Galaxy-S22-Ultra-Phantom-Black.jpg"),
  //     createData('Iphone 13',150000, "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg"),
  //     createData('Laptop',80000, "./Slider images/1.jpg"),
  //     createData('Iphone 14',110000, "./Slider images/2.jpg"),
  //     createData('Headphone',3000, "./Slider images/3.jpg"),

  //   ];

  const dispatch =useDispatch()
  const cart_items = useSelector((state) => state.cart.cart_items);


  const cart_items_number_arr = cart_items.map(item=>item.quantity)
  const cart_items_number = cart_items_number_arr.reduce((a,c)=>a+c)

  const order_totals_array = cart_items.map(item=>item.quantity*item.product_price)
  const order_total = order_totals_array.reduce((a,c)=>a+c)

  const navigate = useNavigate()

  const decrease_quantity = (id, quantity) => e =>{
    e.preventDefault()
    quantity--
    if(quantity ==0){
      dispatch(removeFromCart(id))
    }
    else{
      dispatch(add_item_to_cart(id,quantity))
    }
  }
  const increase_quantity =(id,quantity,product_in_stock) => e => {
    e.preventDefault()
    // console.log(id, quantity, product_in_stock)
    quantity++
    if(quantity>product_in_stock){
      swal("Error","product is out of stock","warning")
    }
    else{
      dispatch(add_item_to_cart(id,quantity))
    }
  }

  const proceedToShipping = (e)=>{
    e.preventDefault()
    sessionStorage.setItem("order_summary",JSON.stringify({order_total,cart_items_number}))
    return navigate('/shipping')
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-8">
          <Typography
        variant="h3"
        align="center"
        paddingTop={"5px"}
        sx={{ textDecoration: "none" }}
        color="dark"
      >
        Cart Items
      </Typography>

      <Container className="m-auto" maxWidth="md">
        {cart_items.length>0 ?
        <TableContainer component={Paper} sx={{ boxShadow: "3", border: "3" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" border="3">
            <TableHead>
              <TableRow sx={{ boxShadow: "5" }}>
                <TableCell>S.No</TableCell>
                <TableCell align="center">Product Image</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Remove Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart_items.map((item, i) => (
                <TableRow
                  key={item.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    boxShadow: "5",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {" "}
                    {i + 1}
                  </TableCell>

                  <TableCell align="center">
                    <img
                      src={`${API}/${item.product_image}`}
                      style={{ height: "100px" }}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell align="center">{item.product_name}</TableCell>
                  <TableCell align="center">{item.product_price}</TableCell>
                  <TableCell align="center">
                    <div className="btn-group">
                      <button className="btn btn-warning" onClick={decrease_quantity(item.product,item.quantity)}> - </button>
                      <input
                        type={"text"}
                        className="form-control border-0  w-25 text-center" value={item.quantity}
                      ></input>
                      <button className="btn btn-warning" onClick={increase_quantity(item.product,item.quantity,item.product_in_stock)}> + </button>

                    </div>
                  </TableCell>
                  <TableCell align="center">
                    Rs. {item.product_price * item.quantity}
                  </TableCell>
                  
                  <TableCell align="center"><button className="btn btn-danger" onClick={()=>{
                    dispatch(removeFromCart(item.product))
                  }}>
                    <i className="bi bi-trash"></i></button>Delete</TableCell>
             </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        :
        <div className="alert alert-danger">No Items In Cart.</div>
                }
      </Container>
          </div>
          <div className="col-md-4">
          <Typography
        variant="h3"
        align="center"
        paddingTop={"10px"}
        sx={{ textDecoration: "none" }}
        color="success.dark"
      >
        Cart Summary
      </Typography>
      <hr/>
      <div>
      <h3>No.of items:{cart_items_number}</h3>
      <h3>Order Total:{order_total}</h3>
          </div>

      <hr/>
      <button className="btn btn-warning w-100 m-2" onClick={proceedToShipping}>Procced to shipping</button>

        </div>
       </div>
      </div>
    
    </>
  );
}

export default Cart;
