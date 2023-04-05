import React, { useState } from 'react'

const Counter1 = () => {







  let  [count,setCount] = useState(0)


  let[data,setData] =useState(100)

  const increase_data=()=>{
    setData(data+10)

  }

  
  const reset_data=()=>{
    setData(0)

  }
  
  const decrease_data=()=>{
    setData(data-10)

  }

  const increase_count =() =>{

    setCount(++count)
  }

  
  const reset_count =() =>{

    setCount(0)
  }

  
  const decrease_count =() =>{

    setCount(--count)
  }
  
  


  return (
    <>
    <h1 className='text-center display-3'>
    Count:{count}
    </h1>
    <center>

        {
            count<10 &&
    <button className='btn btn-success btn-xl mx-2 px-2' onClick={increase_count}>Increase count</button>
        }
        

        <button className='btn btn-danger btn-xl mx-2 p-2' onClick={decrease_count}>Decrease count</button>
            
        <button className='btn btn-warning btn-xl mx-2 px-2' onClick={reset_count}>Reset count</button>

        
    </center>
    
    <br/>

    <h1>Data:{data}</h1>

    <center>
       
    <button className='btn btn-success' onClick={increase_data}>Increase data</button>
    <button className='btn btn-warning'onClick={reset_data}>reset data</button>

    <button className='btn btn-danger'onClick={decrease_data}>decrease data</button>

    </center>


    
    

    
    </>
  )
}

export default Counter1