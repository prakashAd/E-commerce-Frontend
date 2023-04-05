import React, { useContext } from 'react'
import Display from './Display'
import { GlobalContext } from './GlobalContext'

const Data = () => {
    let info=useContext(GlobalContext)
  return (
    <>
    
    {info}
    <Display name={"prakash"} address={"kathmandu"}/>
    <Display name={"ram"} address={"lalitpur"}/>
    </>
  )
}

export default Data