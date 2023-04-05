import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
   
    const counterReducer =useSelector(store=>store.counter)
    let count =counterReducer.count
    let data =counterReducer.data

    let dispatch =useDispatch()
    const increase_count =()=>{
        dispatch({type:"increase_count"})
    
    }

    const decrease_count =()=>{
        dispatch({type:"decrease_count"})

    }
    
    const reset_count =()=>{
        dispatch({type:"reset_count"})
       

    }

    const gameStore =useSelector(store=>store.game)
    const game = gameStore.game
    const player = gameStore.player
  
    const [gamename,setGame]=useState('')
    const [playername,setPlayer]=useState('')
  
    // const dispatch =useDispatch()
  
    const update_game=()=>{
  
      dispatch({type:"update_game", payload:gamename })
  
    }
  
    const update_player=()=>{
  
      dispatch({type:"update_player",payload:playername})
    }
    
  return (

    <>
    
      <h1 className='display-1 text-center ' >count:{count} </h1>  
<div className='d-flex ' >
      <button className='btn btn-warning  w-25' onClick={increase_count}>increase</button><br/>
      <button className='btn btn-danger  w-25' onClick={reset_count}>reset</button><br/>
      <button className='btn btn-success w-25' onClick={decrease_count}>decrease</button><br/>

  </div>
      

      <h1 className='display-1 text-center' >count:{data} </h1>   

      
      <button className='btn btn-danger' onClick={()=>dispatch({type:"increase_data"})}> increase data</button>


 <h1 className='display-1 '>Game:{game}</h1>
<h1 className='display-1 '>Player:{player}</h1> 
<div className='d-flex  w-50 m-auto my-2'>

<input className='form-control' type={'text'} placeholder='enter game name here' onChange={e=>setGame(e.target.value)}></input>
<button className='btn btn-success w-50' onClick={update_game}>Update game </button>
</div>
<div className='d-flex w-50 m-auto'>
<input className='form-control' type={'text'} placeholder='enter player  name here'onChange={e=>setPlayer(e.target.value)}></input>
<button className='btn btn-danger w-50' onClick={update_player}> Update player</button>

</div>


    </>
  )
}

export default Main