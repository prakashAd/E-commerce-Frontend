import { SettingsCellOutlined, WindowRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

function Counter() {


    /*
    useState - hook to manage state
                re-renders the pages when the value changes

                syntax:
                let/const [name,function]=useState(initial value)
                name -variable name
                function -function to update variable,eg:setName

                initial value - starting value
                 0-9:number 
                 " ":string
                 [ ]:array
                 { }:objects



    */



    let [count,setCount] =useState(0)

    let [data,setData] =useState(100)





    const increase_count=()=>{
        setCount(++count)

    }

    
    const decrease_count =()=>{
        setCount(--count)

    }

    const reset_count= ()=>{
        setCount(0)

    }


/*
    
    use effect -shows side effect when state variable changes state

    syntax:

    useEffect(function,[state_variables])
    functions-> effect to be seen

    state_variable-> list of state variables that trigger the functon
    */


    useEffect(()=>{

      window.alert("value is  updated")

     },[count,data])

     
    
    

    // console.log(count)







  return (
    <>
    <h1 className='text-center display-1 '>

    Count{count}

    </h1>
    <center >

        {

          count<10 &&  
      <button className='btn btn-success btn-lg m-5 p-3'  onClick={increase_count}>+ </button>
    }
      <button className='btn btn-warning btn-lg m-5 p-3'  onClick={reset_count}>Reset count </button>
        
      <button className='btn btn-danger btn-lg  m-5 p-3'  onClick={decrease_count}>-</button>
       
        </center>
        <br/>


        
{/* 
        <h1>  Data:{data}</h1>
      <button className='btn btn-success btn-sm'  onClick={()=>setData(data+10)}>increase data </button>
      <button className='btn btn-danger btn-sm'  onClick={()=>setData(data-10)}>Decrease data </button>
      <button className='btn btn-warning btn-sm'  onClick={()=>setData(1000)}>Reset data </button>

        

    */}
        

    
    </>
)}
  

export default Counter