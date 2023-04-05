import swal from "sweetalert"
import { getProductDetails } from "../../api/productapi"
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "./cartConstants"

export const add_item_to_cart = (product,quantity) =>async(dispatch,getState)=>{
    //product= id

    //get product details
    let data = await getProductDetails(product)
    //load data intto reducers/store
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            product_name:data.product_name,
            product_price:data.product_price,
            product_image:data.product_image,
            product_in_stock:data.product_in_stock,
            quantity: quantity

        }
    })
    //set data in localstorage
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}

 export const removeFromCart = (id) => (dispatch,getState) =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload:id
    })
    swal('Removed','Item removed from cart','info')
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))

}

export const saveShippingInfo = (shipping_info)=>(dispatch,getState)=>{
    dispatch({

    type:SAVE_SHIPPING_INFO,
    payload:shipping_info
})
swal('success',"Shipping Infromation updated",'success')
localStorage.setItem("shipping_info",JSON.stringify(getState().cart.shipping_info))



}