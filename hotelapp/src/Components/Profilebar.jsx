import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router';


const Profilebar = () => {
 
    const GetName=JSON.parse(localStorage.getItem("user"))
    
    const navigate=useNavigate()
const Functlogout=()=>{
    localStorage.removeItem("user")
       navigate("/")
}
    if(!GetName){
        return <p>loading...</p>
    }
  return (
    <div className='px-3 lg:px-10 mt-10 h-full pb-10 relative'>

        <div className='flex space-x-3 items-center pb-5 border-b border-gray-500/30'>
            <FaUserCircle className='text-3xl'/>
            <div>
<h1 className='text-xl text-gray-500 font-medium '>{GetName.name || "user"}</h1>
<p className='text-gray-500 font-light'>Account user</p>
            </div>


            
        </div>
<div className='flex flex-col jus items-start mt-10'>
                        <NavLink to="/profile/" end className={({isActive})=>isActive?"mb-6  text-nowrap transition-colors duration-150 text-md md:text-lg bg-blue-100 px-4 w-full rounded-md py-2  text-blue-600 font-medium flex justify-center items-center":"mb-6  text-sm md:text-lg text-gray-600 font-medium flex w-full px-4 py-2  justify-center items-center"}>
<FaRegCircleUser className='mr-2'/>
Personal Data
            </NavLink>
             <NavLink to="/profile/bookings" className={({isActive})=>isActive?"mb-6  w-full text-sm md:text-lg bg-blue-100 px-4 rounded-md py-2  text-blue-600 font-medium flex justify-center items-center":"mb-6   text-gray-600 font-medium flex text-sm md:text-lg w-full px-4 py-2 justify-center items-center"}>
<CiBookmarkCheck className='mr-2'/>
Bookings
            </NavLink>

             <NavLink to="/profile/wishlists" className={({isActive})=>isActive?"mb-6 w-full text-sm md:text-lg bg-blue-100 px-4 rounded-md py-2  text-blue-600 font-medium flex justify-center items-center":"mb-6   text-gray-600 font-medium text-sm md:text-lg flex w-full px-4 py-2  justify-center items-center"}>
<FaHeart className='mr-2'/>
Wishlists
            </NavLink>
                         <NavLink to="/profile/reviews" className={({isActive})=>isActive?"mb-6 w-full   text-md md:text-lg bg-blue-100 px-4 rounded-md py-2  text-blue-600 font-medium flex justify-center items-center":"mb-6   text-gray-600 font-medium text-sm md:text-lg w-full px-4 py-2  flex justify-center items-center"}>
<FaRegCommentDots className='mr-2'/>
Reviews
            </NavLink>
</div>

<div onClick={Functlogout} className='absolute bottom-20  flex justify-center items-center text-red-500 py-2  px-2 bg-red-100 rounded-md'>
 <IoIosLogOut className='mr-2'/> Logout

</div>
      
    </div>
  )
}

export default Profilebar
