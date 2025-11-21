import React, { useRef, useState } from 'react'
import Profilebar from '../Components/Profilebar'
import { Outlet } from 'react-router'
import Nav from '../Common/Nav'
import { easeIn, motion } from 'framer-motion'


const Profile = () => {
  const [baropen,Setbaropen]=useState(false)
  const newRef=useRef()
  const newTwo=useRef()
  const newThree=useRef()
  const Funclose=(e)=>{
if(e.target==newRef.current || newTwo.current || newThree.current){
  Setbaropen(false)
}
  }
  return (
<motion.div initial={{opacity:0 ,y:-14}} animate={{y:0, opacity:1}} transition={{duration:0.3,ease:easeIn}} >
{/* sidebar  */}
<Nav Setbaropen={Setbaropen} user={"user"} ref={newThree} onClick={Funclose}/>
<div className='flex bg-gray-100 gap-4 px-10' ref={newRef}  onClick={Funclose}>
  <div  className={`absolute left-0 ${baropen?"translate-x-0 inset-y-0 fixed border-r top-0 border-black/5 rounded-none shadow-2xl ":"-translate-x-full"} md:static  w-1/3 md:translate-x-0 transition-transform duration-300 md:w-1/4 lg:w-1/5 my-5 bg-white rounded-md  min-h-screen `}>
  <Profilebar/>
  </div>
  <div className="w-full md:3/4 lg:w-4/5 min-h-screen bg-white my-5 rounded-md" ref={newTwo} onClick={Funclose}>
  <Outlet/>
  </div>
</div>
</motion.div>
  )
}

export default Profile
