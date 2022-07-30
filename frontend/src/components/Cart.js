
import React from 'react'
import {useLocation} from 'react-router-dom'


function Cart() {
    let location = useLocation();
    console.log("location",location)
  return (
    <div>Cart</div>
  )
}

export default Cart