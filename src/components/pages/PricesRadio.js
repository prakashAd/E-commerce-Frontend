


import { FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import {prices} from'./prices'

const PricesRadio = ({handlePrice}) => {
  const handleChange =(e)=>{

    let price = prices.find(price=>price.id== e.target.value)
    let price_value = price.value
    handlePrice(price_value,'product_price')
  }
  return (
    <>

<Typography variant ='h3'pl='3' color='primary'>Prices</Typography>
<FormGroup>
  
  <RadioGroup name='price'>
    {
        prices.map((price) => {
            return<FormControlLabel key ={price.id} control={<Radio onChange={handleChange} value={price.id}/>}label={price.name}value={price.id}/>
        })
    }
  
  </RadioGroup>
  </FormGroup>
    </>
  )
}

export default PricesRadio
