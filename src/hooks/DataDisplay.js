import React from 'react'

const DataDisplay = ({post}) => {
  return (
    <>
<div className='m-5 p-5 border-3 shadow-lg'>

<h3>Post Id:{post.id}</h3>
<h3>Title:{post.title}</h3>
<h3>Body:{post.body}</h3>
<h3>User:{post.userid}</h3>
<h3>Description:{post.description}</h3>
<h3>Category:{post.category}</h3>
<div className='container'>

<img className='img-div' src={post.image} ></img>
</div>


</div>

    </>
  )
}
export default DataDisplay