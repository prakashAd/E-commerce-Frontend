import React, { useEffect, useState } from 'react'
import DataDisplay from './DataDisplay'
import axios from 'axios'

const Datafetch = () => {
    const [posts,setPosts]=useState([])
    const [limit,setLimit]=useState(20)

    useEffect(()=>{
        // fetch( 'https://jsonplaceholder.typicode.com/posts')
        // .then(response=>response.json())
        // .then(data=>setPosts(data))

        //using axios
      
        axios.get('https://fakestoreapi.com/products')
        .then(response=>response.data.slice(0,limit))
        .then(data=>setPosts(data))
// console.log(limit)
    },[limit])

    return (

    <>
{

    posts.map(p=>{

        return <DataDisplay post={p}/>
    })

}

{ limit<100 &&

<button className='btn btn-warning' onClick={()=>setLimit(limit+20)}>load more</button>
}

{
    limit>0 &&
    <button className='btn btn-warning' onClick={()=>setLimit(limit-20)}>Show less</button>
}
    </>
  )
}

export default Datafetch