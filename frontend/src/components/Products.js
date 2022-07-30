import  React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import airpodImg from "../images/airpods.jpg"
import alexaImg from "../images/alexa.jpg"
import cameraImg from "../images/camera.jpg"
import mouseImg from "../images/mouse.jpg"
import phoneImg from "../images/phone.jpg"
import playstationImg from "../images/playstation.jpg";
import { useNavigate } from 'react-router-dom';





const Products = () => {
  let navigate=useNavigate();
  const ProductList = [
    {
      _id: '1',
      name: 'Airpods Wireless ',
      image: airpodImg,
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '2',
      name: 'iPhone 11 Pro ',
      image: phoneImg,
      description:
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
      brand: 'Apple',
      category: 'Electronics',
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      _id: '3',
      name: 'Cannon EOS 80D DSLR ',
      image: cameraImg,
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      _id: '4',
      name: 'Sony Playstation 4 Pro ',
      image: playstationImg,
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 399.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      _id: '5',
      name: 'Gaming Mouse',
      image: mouseImg,
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
      brand: 'Logitech',
      category: 'Electronics',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      _id: '6',
      name: 'Amazon Echo Dot ',
      image: alexaImg,
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
  ]

  const [rateStar, setRateStar] = useState();
  const productPageHandler=(data)=>{
    navigate(`products`,{
      state:{...data}   })
  }







  return (
    <div >
      <div className="px-24 mt-12 text-3xl font-gotham tracking-widest text-zinc-200 opacity-70 ">Latest Arrival's</div>
    <div className="grid grid-cols-12 mt-6  gap-8 pb-12 px-24">

      {
        ProductList.map((item) => (
          <div onClick={()=>productPageHandler(item)} className="col-span-4  shadow-lg shadow-black hover:scale-105 transition duration-500   rounded-lg flex flex-col justify-center items-star ">
            <div className="rounded-lg shadow-lg shadow-black">
              {/* {item.image} */}
              <img src={item.image} style={{ borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }}/>
            </div>
            <p className=" text-3xl text-zinc-300 opacity-25 font-gotham mt-4  px-4 tracking-wider">{item.name}</p>
            <p className="text-base text-zinc-300 opacity-20 font-gotham mt-2    px-4 tracking-widest">{item.category}</p>
            <p className=" flex space-x-4 mb-2 items-center   mt-2  px-4 "><span className='opacity-60'><Rating name="half-rating" defaultValue={item.rating} onChange={(event, newValue) => {
              setRateStar(newValue);
            }} value={rateStar} precision={0.5} /></span><span className='opacity-20 text-base tracking-wide text-zinc-300 font-semibold'>{`${item.numReviews} reviews`}</span></p>
            <div className="flex justify-between pr-4  items-center">
              <p className="text-3xl  mt-2  text-zinc-300 opacity-75  font-gotham  mb-6 px-4  tracking-widest">$ {item.price}</p>
              <button  className="px-8 rounded-full mb-6 bg-pink-700 py-3  text-pink-300 font-gotham tracking-wider shadow-lg shadow-black hover:text-pink-700 hover:bg-white transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))
      }

    </div>
    </div>
  )



}

export default Products;
