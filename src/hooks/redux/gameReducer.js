
const initialData ={

    game : "football",
    player : "ronaldo"
}

const gameReducer =(state=initialData,action)=>{

    switch(action.type){
        case "update_game":
            return{...state,game:action.payload}


        case "update_player":
            return{...state,player:action.payload}


            default:
                return state

        }
    

    return state


}

export default gameReducer