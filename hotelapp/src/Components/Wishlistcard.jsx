import React from 'react'
import Button from '../Common/Button'
import { GetforDelete } from '../ServicesApi/crud/Deleteapi'
import { useDispatch } from 'react-redux'
import { GetWishlist } from '../redux/BookingSlice'

const Wishlistcard = ({data,key}) => {
const Dispatch=useDispatch()
  const deleteFunc=async(id)=>{

  const response=await GetforDelete(id)
   Dispatch(GetWishlist())
  

  }
  return (
    <div className='rounded-md p-3' key={key}>
      <img src={data?.data?.images[0]} alt="" className='w-full h-60 object-cover rounded-md' />
      <div className='flex justify-between items-center'>
        <div>
            <p className='text-xl font-semibold mb-2'>{data?.data?.name}</p>
            <p className='font-light text-gray-700 text-md overflow-hidden'>{data?.data?.location}</p>
        </div>
        <Button onClick={()=>deleteFunc(data?.id)} text={"delete"} />
      </div>
    </div>
  )
}

export default Wishlistcard
