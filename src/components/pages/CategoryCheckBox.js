import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../api/categoryapi'

const CategoryCheckBox = ({handleCategory}) => {
    const [categories,setCategories] = useState('')
    const [checked,setChecked] = useState([])
    useEffect(() => {

    getAllCategories()
    .then(data=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            setCategories(data)
        }
    })

    },[])
    const handleChange = e =>{
      let new_checked = [...checked]
      let new_category = e.target.value
      let itemExists = new_checked.findIndex(item=>item === new_category)

      if(itemExists===-1){
        new_checked.push(new_category)
      }
      else{
        new_checked.splice(itemExists,1)
      }
      setChecked(new_checked)
      handleCategory(new_checked, 'category')
    }
  return (
    <>
    <Typography variant ='h3'pl='3' color='primary'>Departments</Typography>
  <FormGroup>
  {
      categories && categories.map((category,i)=>{
       return <FormControlLabel control={<Checkbox  onChange={handleChange} value={category._id}/>} label={category.category_name} key={i}/>

    })
  }

  </FormGroup>
    </>
  )
}

export default CategoryCheckBox