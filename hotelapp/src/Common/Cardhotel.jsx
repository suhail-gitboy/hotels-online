import Rating from '@mui/material/Rating'
import { easeInOut, motion } from 'framer-motion'
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import React from 'react'
import { Addapi } from '../ServicesApi/crud/Adding';
import { toast } from 'sonner';
import { Link } from 'react-router';

const Cardhotel = ({data,id}) => {
  const FunAdd=async(data)=>{
   const Response=  await Addapi({data})
   if(Response.status){
    toast.success("added to wishlist")
   }else{
    console.log(Response);
    
   }
  }
  return (
    <motion.div initial={{scaleX:0.9, filter:"blur(5px)",opacity:0.5}} whileInView={{
        filter:"blur(0px)",opacity:1,scaleX:1}} transition={{duration:0.4, ease:easeInOut}} key={id} className="max-w-4xl mb-3 relative mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
    
      <div className="w-1/2">
        <img
          src={data.images[0]}
          
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-between ">
        <div>
          <h2 className="text-md md:text-xl font-semibold text-black">{data.name}</h2>
          <p className="text-gray-600 mt-1">{data.location}</p>
          <div className="flex items-center mt-2">
             <Rating sx={{fontSize:"1.3rem"}} name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
            <span className="ml-4 text-gray-500">{data.roomsAvailable} Room(s) Available</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-black font-bold text-lg">₹{data.price}</span>
          <Link to={`/roomdetail/${data.id}`} className="bg-white text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Book Now
          </Link>
        </div>
        <div onClick={()=>FunAdd(data)} className="absolute left-3 top-3 p-1 md:p-2 hover:bg-gray-200 bg-white transition-colors duration-200 border-1 border-white rounded-full">
<FaRegHeart className=' text-md md:text-xl hover:text-rose-600 text-rose-500' />

        </div>
      </div>
    </motion.div>
  )
}

export default Cardhotel
