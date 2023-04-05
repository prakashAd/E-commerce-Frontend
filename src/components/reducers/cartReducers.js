import { ADD_TO_CART,REMOVE_FROM_CART, SAVE_SHIPPING_INFO} from "./cartConstants"
import swal from "sweetalert"

const initialData = {
    cart_items: [],
    shipping_info: {}

}
const cartReducer = (state, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            let new_item = action.payload
            let itemExists = state.cart_items.find(item=>item.product ===new_item.product)
            if(itemExists && new_item.quantity ===1){

                swal('Alert','Item already in cart','info')
                return {...state}
            }

            else if(!itemExists){
                return {...state,cart_items:[...state.cart_items,new_item]}
            }
            else{
                return {...state,cart_items: [...state.cart_items.map(item=>item.product===new_item.product? new_item : item)]}
            }

            case REMOVE_FROM_CART:
                return {...state,
                cart_items:[...state.cart_items.filter(item=>item.product!=action.payload)]}
                
            case SAVE_SHIPPING_INFO:
                return{...state,
                    shipping_info:action.payload

                }


        default:
            return{...state}
    }
}

export default cartReducer