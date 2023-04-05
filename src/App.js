import GlobalContextProvider from "./hooks/GlobalContext";
import Myroutes from "./Myroutes";
import { Provider } from "react-redux";
// import gameReducer from "./hooks/redux/gameReducer";
// import { combineReducers, createStore } from "redux";
// import counterReducer from "./hooks/redux/counterReducer";
// import { itemReducer } from "./reducers/itemReducer";
import {store} from "./components/reducers/store";


function App(){
  // const rootReducer =combineReducers({

  //   counter:counterReducer,
  //   itemStore:itemReducer,
  //   game:gameReducer
  //   })
  // // const mystore = createStore(gameReducer)

  // const mystore = createStore(rootReducer)


  return(
    <>
    <Provider store={store}>


   <GlobalContextProvider>
   <Myroutes/>

   </GlobalContextProvider>
   </Provider>


    </>

  );
  
}
export default App;

