import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router'
import Wishlistcard from './Wishlistcard'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlist } from '../redux/BookingSlice'

const Wishlist = () => {
const Dispatch=useDispatch()
    useEffect(()=>{
Dispatch(GetWishlist())
    },[])

    const {wishlist}=useSelector((state)=>state.Booking)
    console.log(wishlist);
    
  return (
    <div className='p-4 bg-gray-50'>
      <div className='flex justify-between mb-10'>
        <div>
            <h1 className='text-2xl font-semibold mt-1'>Wishlists</h1>
            <p className='text-sm font-light text-gray-600'>Explore and save your favorite Destinations here</p>
        </div>
        <Link to="/search" className="px-2 py-2 border border-black/5 roounded-md   flex items-center space-x-1"><FaPlus/> Create alist</Link>

      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 h-[50vw] overflow-y-auto gap-3'>
        {
          wishlist.map((data,id)=>(
            <Wishlistcard data={data} key={id}/>
          ))
        }

      </div>
    </div>
  )
}

export default Wishlist
