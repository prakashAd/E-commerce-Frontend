const initialData={
    count:0,
    data:10
}

const counterReducer =(state=initialData,action)=>{

    switch(action.type){
        case "increase_count":
            return{...state, count:++state.count}

            case "decrease_count":
            return{...state, count:--state.count}

          
            
              case "reset_count":
            return{...state, count:0}

            case "increase_data":
                return{...state, data:state.data+100}
                




            default:
    return state


    }

}

export default counterReducer