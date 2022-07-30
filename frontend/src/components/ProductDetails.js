import React, { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Rating from '@mui/material/Rating';

function ProductDetails() {
  let location = useLocation();

  const [rateStar, setRateStar] = useState();



  return (
    <div className='h-screen px-40 pt-12'>
      <h1 className='text-2xl font-gotham text-slate-300 tracking-widest border-b border-zinc-600 pb-2'>Product Details</h1>
      {/* <div className="flex  justify-center pt-12">
      <div className='flex flex-col    rounded-lg  shadow-xl shadow-black '>
        <div className='flex space-x-6 pl-4 pr-12 pt-4 justify-center '>
        <div className='w-2/5 '>
          <img src={location.state.image} style={{ borderTopRightRadius: "7px", borderTopLeftRadius: "7px",height:"40vh" }} />
        </div>
        <div className='w-full '>
          <div className='mb-2'>
            <p className='font-gotham mb-1 text-slate-300 tracking-widest text-2xl'>{location.state.name}<span>({location.state.brand})</span></p>
            <p className='font-semibold text-2xl mb-2 leading-8 text-slate-300'>{location.state.category}</p>
            <p className='font-semibold text-lg  text-slate-300'>{location.state.description}</p>
          </div>
          <div>
            <p className=" flex space-x-4 mb-2 items-center mt-4  px-4 "><span className='opacity-60'><Rating name="half-rating" defaultValue={location.state.rating} onChange={(event, newValue) => {
              setRateStar(newValue);
            }} value={rateStar} precision={0.5} /></span><span className=' text-base tracking-wide text-slate-300 '>{`${location.state.rating} star's ${location.state.numReviews} reviews`}</span></p>
          </div>
          <div className='font-gotham text-2xl mb-3 tracking-wide text-slate-300'>$ {location.state.price} </div>
          <div>
            <p className='text-xl text-slate-300 tracking-wide font-semibold'>Hurry up only {location.state.countInStock} items left in stock</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <button  className='w-full hover:bg-pink-200 hover:text-pink-600 transition bg-pink-600 rounded-b-lg text-xl font-gotham text-pink-200 tracking-widest mt-8 py-4'>
          Buy Now
        </button>
      </div>
        </div>
      
    </div> */}

      <div className='grid grid-cols-12 mt-4 gap-4'>
        <div className='col-span-4 flex items-center'>
          <img src={location.state.image} style={{ borderRadius: "7px"}} className="shadow-xl shadow-black"/>
        </div>
        <div className=' col-span-4 shadow-xl  bg-white shadow-black rounded-lg px-8 py-4'>
         <div className='border-b border-gray-500 pb-3 '>
         <p className='font-gotham tracking-widest text-2xl text-gray-700'>{location.state.name}</p>
          <p className='tracking-widest font-semibold text-gray-700 mt-1'>{location.state.brand}</p>
          <p className='tracking-widest font-semibold text-gray-700 mt-1'>{location.state.category}</p>
         </div>
         <div className='border-b tracking-widest font-semibold text-gray-700 border-gray-500 mb-2'>
         <p className=" flex space-x-4 mb-2 items-center mt-4  "><span className=''><Rating name="half-rating" defaultValue={location.state.rating} onChange={(event, newValue) => {
              setRateStar(newValue);
            }} value={rateStar} precision={0.5} /></span><span className=' text-base tracking-wide  '>{`${location.state.rating} star's ${location.state.numReviews} reviews`}</span></p>
         </div>
         <p className='border-b border-gray-500 pb-3 text-xl text-gray-700 font-gotham tracking-widest'> Price : $ {location.state.price} </p>
         <p className='mt-1 tracking-wide font-semibold text-gray-700'>{location.state.description}</p>
        </div>
        <div className=' col-span-4 flex items-center text-center '>
          <div className='bg-white w-full pb-4 rounded-lg shadow-xl px-4 shadow-black'>
          <div className=' flex item-center border-b border-gray-400 py-3 space-x-2 justify-center  tracking-wider font-semibold text-xl text-gray-700 '>
            <p>Price : </p>
            <p className='font-bold'>$ {location.state.price}</p>
          </div>
          <div className=' flex item-center justify-center space-x-2 mt-2 border-b border-gray-400 pb-2 tracking-wide font-semibold text-lg text-gray-700 '>
            <p>Status : </p>
            <p>
              {
                location.state.countInStock > 0 ? ` ${location.state.countInStock} items left` :`Out of Stock`
              }
            </p>
          </div>
          <button className='mt-6 w-full border py-2 rounded-full bg-pink-700 text-pink-200 font-gotham tracking-wider '>
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
