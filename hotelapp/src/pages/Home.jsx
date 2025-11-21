import React, { useEffect, useRef } from 'react'

import { FaRegHeart } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs"
import { RiHotelLine } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineAddHomeWork } from "react-icons/md"
import { VscAccount } from "react-icons/vsc";
import { LuSun } from "react-icons/lu";
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { GiWinterGloves } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { LuTentTree } from "react-icons/lu";
import HotelCardExlusive from '../Common/HotelCardExlusive';
import { FaMountainSun } from "react-icons/fa6";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import {motion,AnimatePresence,useInView, easeInOut} from "framer-motion";
import { ContextDatas } from '../Common/ContextWrapped';
import { reviews } from '../Common/Hoteldatas';
import Button from "./../Common/Button"
import Nav from '../Common/Nav';
import { GetApiHotel } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
const Home = ({text="Your Trips Starts here"}) => {
 const ref = React.useRef(null);
 const location=useLocation()
 const newRef=useRef(null)
  const isInView = useInView(ref, { once: true });
  const isInViewTwo = useInView(ref, { once: true });
 const dispatch=useDispatch()
  const {isLogged,SetisLogged,Setloginmodal}=ContextDatas()




  
  return (
    <>
    {/* top */}
    <Nav/>


    {/* hero */}
    <div className='relative'>
 
      <div className='relative flex justify-center items-center'>
<img src="../../public/images/Hero Header (1).png" className='w-full sm:h-100 md:h-fit' alt="" />
<div className='text-center absolute '>
<AnimatePresence>
  {text.split("").map((char, i) => (
    <motion.span
      ref={ref}
      key={i}
      initial={{ opacity: 0, x: -18 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      exit="hidden"
      transition={{ duration: 0.3, delay: i * 0.1 }}
      className="text-2xl md:text-6xl text-white font-bold inline-block"
    >
      {char === " " ? <span>&nbsp;</span> : char}
    </motion.span>
  ))}
  <motion.p ref={newRef}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInViewTwo ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }} className='text-sm md:text-2xl font-medium text-white'>find unique stay across hotels,villas and more</motion.p>
</AnimatePresence>

 
        
      </div>
      </div>
   <div className='flex  relative justify-center items-center '>

       <div className=' absolute -bottom-9 bg-white  rounded-md shadow-xl flex-col px-6 py-3'>
                 <div className='mb-2  hidden md:flex  absolute left-0  justify-center items-center -top-18 w-full px-3 py-5  rounded-md'>
<div className='flex items-center justify-center gap-x-2 backdrop-blur-xl px-9 mx-auto py-4 rounded-full'>
 <Link to="/search" className='flex  items-center text-white hover:bg-white hover:text-black  px-3 rounded-full py-2 transition-colors duration-300' ><RiHotelLine className=' w-6 h-6 mr-1'/>hotel</Link>
 <Link to="/search" className='flex items-center text-white hover:bg-white hover:text-black  px-3 rounded-full py-2 transition-colors duration-300' ><IoIosHome className=' w-6 h-6 mr-1'/>home</Link>
 <Link to="/search" className='flex items-center text-white hover:bg-white hover:text-black  px-3 rounded-full py-2 transition-colors duration-300' ><MdOutlineAddHomeWork className=' w-6 h-6 mr-1'/>guest house</Link>
 <Link to="/search" className='flex items-center text-white hover:bg-white hover:text-black  px-3 rounded-full py-2 transition-colors duration-300' ><HiHomeModern className='text-white w-6 h-6 mr-1'/>Villas</Link>
 <Link to="/search" className='flex items-center text-white hover:bg-white hover:text-black  px-3 rounded-full py-2 transition-colors duration-300' ><BsFillBuildingsFill className=' hover:text-black w-6 h-6 mr-1 '/>Appartments</Link>
</div>
      </div>
<div className='flex md:mt-6 space-x-4 items-center' >
  <div>
    <p className='text-black font-semibold text-md md:text-xl '>Location</p>
    <p className='font-semibold text-xs md:text-sm'>where you going?</p>
  </div>
  <div className=' space-x-4 hidden md:flex px-6'>
    <div className='border-l border-black/10 p-3'>
      <p className='text-md font-semibold mb-1 mr-2'>Check-in</p>
      <p className='text-gray-600 text-sm '>Add dates</p>

    </div>
      <div className='border-l border-black/10 p-3'>
      <p className='text-md font-semibold mb-1'>Check-out</p>
      <p className='text-gray-600 text-sm'>Add dates</p>

    </div>
      <div className='border-l border-black/10 p-3'>
      <p className='text-md font-semibold mb-1'>Rooms and guestes</p>
      <p className='text-gray-600 text-sm'>one room,one adults,child 0</p>

    </div>
   
  </div>
  <div>
    <Link to="/search" className='px-4 py-2 rounded-md text-sm text-white bg-blue-600 hover:bg-blue-400 transition-colors duration-300'>Search</Link>
  </div>
</div>
      </div>
   </div>
      
    </div>
     
     <div className='px-5 sm:px-7 md:px-14 lg:px-20'> {/*padding main*/}

        {/* third */}
        <div className='mt-20'>

     <motion.div  className='grid grid-cols-1 sm:grid-cols-3'>
          <motion.div initial={{opacity:0, filter:"blur(10px)" }}   whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{duration:0.7, ease:easeInOut}} className='p-4 flex flex-col items-center justify-center space-y-2'>
         <div className='p-4 bg-blue-200 rounded-md'>
             <img src="../../public/images/shield-check.png" alt="" className='w-10 h-10 ' />
         </div>
            <p className='font-semibold text-xl'>No hidden fees</p>
            <p className='text-sm text-center text-gray-700 '>Transparent pricing with no hidden fees.</p>
          </motion.div>
           <motion.div initial={{opacity:0, filter:"blur(10px)" }}   whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{duration:0.7, ease:easeInOut}} className='p-4 flex flex-col items-center justify-center space-y-2'>
               <div className='p-4 bg-blue-200 rounded-md'>
             <img src="../../public/images/file-list-edit.png" alt="" className='w-10 h-10 ' />
         </div>
            <p className='font-semibold text-xl'>Instant booking</p>
            <p className='text-sm text-center text-gray-700 '>Get confirm right after you reserve.</p>
          </motion.div> <motion.div initial={{opacity:0, filter:"blur(10px)" }}   whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{duration:0.7, ease:easeInOut}} className='p-4 flex flex-col items-center  space-y-2'>
              <div className='p-4 bg-blue-200 rounded-md'>
             <img src="../../public/images/dollar-circle.png" alt="" className='w-10 h-10 ' />
         </div>
            <p className='font-semibold text-xl'>Flexibility</p>
            <p className='text-sm text-center text-gray-700 '>flexible option with free cancellation on many listings.</p>
          </motion.div>
        </motion.div>

   
       </div>
       {/* fourth */}
       <div className='mt-10 mb-10'>
        <h4 className='text-3xl font-black'>Trending Destinations</h4>
        <div className='mt-3 grid grid-cols-2 space-y-2 md:grid-cols-4 w-full lg:w-3/4 space-x-3  '>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-4 py-3 border border-black/20 rounded-full flex justify-center items-center"
      : "px-4 py-3  text-black border border-black/20 rounded-full flex justify-center items-center"
  }
  to="/"
>
  <LuSun className="mr-2" />
  Summer hotspot
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-4 py-3 border border-black/20 rounded-full flex justify-center items-center"
      : "px-4 py-3 text-black border border-black/20 rounded-full flex justify-center items-center"
  }
  to="/home/spring"
>
  <LuTentTree  className="mr-2" />
  Spring picks
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-4 py-3 border border-black/20 rounded-full flex justify-center items-center"
      : "px-4 py-3 text-black border border-black/20 rounded-full flex justify-center items-center"
  }
  to="/home/Automn"
>
  <FaTree className="mr-2" />
  Autumn Escape
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-4 py-3 border border-black/20 rounded-full flex justify-center items-center"
      : "px-4 py-3 text-black border border-black/20 rounded-full flex justify-center items-center"
  }
  to="/home/winter"
>
  <GiWinterGloves  className="mr-2" />
  Winter gateway
</NavLink>

        </div>



{/* <HotelCardExlusive data={Datasforhotel}/> */}
<AnimatePresence mode="wait" >
  
  <Outlet key={location.pathname}/>
  

</AnimatePresence>

       </div>

       <h3 className='text-2xl md:text-4xl font-semibold py-5'>Travel more Spend less</h3>
  <motion.div initial={{ y:10}}
whileInView={{ y:0}}
transition={{ duration: 1, ease: "easeOut" }}
 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-10'>
    <div className='p-4  border border-blue-600/40 rounded-xl shadow-2xl flex flex-col  '>
      <h1 className='text-xl font-semibold mb-2'>10% discounts</h1>
      <p>Enjoy discounts at participating
properties wordwide crowd</p>
    </div>
        <div className='p-4  border border-blue-600/40 rounded-xl shadow-2xl flex flex-col  '>
      <h1 className='text-xl font-semibold mb-2'>Travel of seasons</h1>
      <p>Avoid peak times ans enjoy lower and fever crowds</p>
    </div>    <div className='p-4  border border-blue-600/40 rounded-xl shadow-2xl flex flex-col  '>
      <h1 className='text-xl font-semibold mb-2'>Eclusive deals</h1>
      <p>Enjoy discounts at participating
properties wordwide</p>
    </div>    <div className='p-4  border border-blue-600/40 rounded-xl shadow-2xl flex flex-col  '>
      <h1 className='text-xl font-semibold mb-2'>Weakend special</h1>
      <p>Enjoy 12% off weekend stays</p>
    </div>

  </motion.div>
  {/* s5 */}

<div className='px-6 md:px-14'>
  <h3 className='font-semibold text-3xl py-4'>top sight to see</h3>
  <motion.div initial={{scale:0.9,filter:"blur(5px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.5, ease:easeInOut}}  className='grid grid-cols-1 gap-3 md:grid-cols-2'>
  <motion.div className='relative hover:scale-102 transition-transform duration-300'  >
    <div className='absolute top-4 left-4'>
     <h3 className='flex justify-center items-center text-xl font-bold text-white'>kolukmalai,Munnar<FaMountainSun className='ml-2 text-white' /></h3>
    </div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/1200px-Munnar_hillstation_kerala.jpg" className='w-full rounded-xl h-60' alt="" />
  </motion.div>
<div className='relative hover:scale-102 transition-transform duration-300'>
     <div className='absolute top-4 left-4'>
     <h3 className='flex justify-center items-center text-xl font-bold text-white'>kolukmalai,Munnar<FaMountainSun className='ml-2 text-white' /></h3>
    </div>
<img src="https://images.ctfassets.net/cypk3gnrfs78/6DTkvF6aJQDYJZQ4EbPjyx/72b533aae79523a16d4b6b016af1168a/Alappuzha.jpeg?q=90&fm=jpg&fl=progressive" className='w-full rounded-xl h-60' alt="" />
</div>
</motion.div>
<motion.div initial={{opacity:0.5 ,scale:0.9,filter:"blur(10px)"}} whileInView={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.5, ease:easeInOut}} className='grid mt-5 grid-cols-2 gap-3 md:grid-cols-3'>
<div className='relative hover:scale-102 transition-transform duration-300'>
     <div className='absolute top-4 left-4'>
     <h3 className='flex justify-center items-center text-xl font-semibold text-white'>Mattanchery,Ernamkulam<FaMountainSun className='ml-2 text-white' /></h3>
    </div>
<img src="https://i0.wp.com/touristplacesinkerala.in/wp-content/uploads/2024/08/Fort-Kochi.png" className='w-full rounded-xl h-60' alt="" />
</div><div className='relative hover:scale-102 transition-transform duration-300'>
     <div className='absolute top-4 left-4'>
     <h3 className='flex justify-center items-center text-xl font-semibold text-white'>Marine Drive,Ernamkulam<FaMountainSun className='ml-2 text-white' /></h3>
    </div>
<img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/kochi-madhusudanan-parthasarathy.jpg" className='w-full rounded-xl h-60' alt="" />
</div><div className='relative hover:scale-102 transition-transform duration-300'>
     <div className='absolute top-4 left-4'>
     <h3 className='flex justify-center items-center text-xl font-semibold text-white'>Bolgatty,Ernamkulam<FaMountainSun className='ml-2 text-white' /></h3>
    </div>
<img src="https://th-i.thgim.com/public/incoming/e63gly/article67933459.ece/alternates/FREE_1200/IMG_KTDC02.jpg_2_1_AKA0U3R2.jpg" className='w-full rounded-xl h-60' alt="" />
</div>

</motion.div>
</div>

{/* s7 */}
 <h3 className='font-semibold text-3xl py-4 mt-10'>Things to do in Kerala</h3>
     <div className='mt-3 gap-2 flex  w-full lg:w-3/4 space-x-3  '>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black text-xs border border-black/20 rounded-full flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
  Explore
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black border border-black/20 text-xs rounded-full flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
 Beach
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black border border-black/20 text-xs rounded-full flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
 Museum
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black border border-black/20 rounded-full text-xs flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
  Show 
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black border text-xs border-black/20 rounded-full flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
 Food
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive
      ? "bg-black text-white px-2 py-2 border border-black/20 rounded-full flex justify-center items-center"
      : "px-3 py-1  text-black border text-xs border-black/20 rounded-full flex justify-center items-center"
  }
  to="/summer"
>
  <LuSun className="mr-2" />
Night life
</NavLink>
        </div>
         <Link to="/search">
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 mt-6 mb-10'>
         
          <div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://static.wixstatic.com/media/5afe33_de255f2ea33d4589aa2c9a2b9b10d650~mv2.png/v1/fill/w_580,h_408,al_c,q_85,enc_avif,quality_auto/5afe33_de255f2ea33d4589aa2c9a2b9b10d650~mv2.png" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>History</h1>
          </div>
          <div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/17/28/ed/iduukki-arch-dam.jpg?w=700&h=400&s=1" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>idukki</h1>
          </div><div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-Ltj3Z2pGJtwhvJ1LG1zlP7AVu8QZ57S4g&s" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>Theyyam ,Kannur</h1>
          </div><div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/95/26/3d/bar-interior.jpg?w=500&h=-1&s=1" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>Kovalam party,Kollam</h1>
          </div><div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://cdn.confident-group.com/wp-content/uploads/2021/09/14192247/Calicut-A-place-with-major-historical-significance-COVER.jpg" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>Food capital,kozhikode</h1>
          </div>
          <div className='hover:scale-102 transition-transform duration-300'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3p6BT4kcqCraktjlEiQZ1Y7Exu4W2QjZsww&s" className='h-40 w-50 rounded-lg' alt="" />
            <h1 className='text-sm mt-1 font-semibold text-gray-700 '>Cultural capital,Thrissur</h1>
          </div>

        </div>
        </Link>

        {/* section 8 */}
        <section className="px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Explore Tripto in Motion
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* MAIN FEATURE CARD */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
            className="w-full h-[340px] object-cover"
            alt="Luxury Destination"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-6 text-white w-[80%]">
            <h3 className="text-3xl font-semibold leading-tight mb-2">
              Step Into a world of Luxury
            </h3>

            <p className="text-sm md:text-base mb-4 text-gray-200">
              Immerse yourself in captivating visuals from our most 
              iconic and indulgent destinations.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium">
              Explore All Videos
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: MINI VIDEO CARDS */}
        <div className="flex flex-col justify-between gap-6">

          {/* CARD 1 */}
          <div className="relative rounded-xl overflow-hidden shadow border border-gray-200">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Wayanad_Churam_thamarasseri.jpg"
              className="h-[105px] w-full object-cover"
              alt="Maldives"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
             churam, wayanad
            </div>

            <button className="absolute right-3 top-3 bg-white/90 p-2 rounded-full">
              ▶️
            </button>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-xl overflow-hidden shadow border border-gray-200">
            <img
              src="https://mediaim.expedia.com/destination/1/99be664e173de1e7656c314cda9f8dbd.jpg"
              className="h-[105px] w-full object-cover"
              alt="Phuket"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
              Munroe island, kollam
            </div>

            <button className="absolute right-3 top-3 bg-white/90 p-2 rounded-full">
              ▶️
            </button>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-xl overflow-hidden shadow border border-gray-200">
            <img
              src="https://www.shutterstock.com/image-photo/marine-drive-mumbai-night-india-600w-1073721995.jpg"
              className="h-[105px] w-full object-cover"
              alt="Maui"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-2 left-3 text-white text-sm font-medium">
              marine drive, Kochi
            </div>

            <button className="absolute right-3 top-3 bg-white/90 p-2 rounded-full">
              ▶️
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* scrooll review */}


     </div>
         <motion.div
  className="relative overflow-x-hidden w-full min-h-80 bg-neutral-900 py-10 text-white"
>
  <h3 className='text-2xl font-semibold mb-5 ml-10'>Our Reviews</h3>
  {/* LEFT FADE */}
  <motion.div animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }} className="flex gap-6">
    {reviews.map((data,id)=>(
       <div className="min-w-[220px] bg-neutral-700 hover:scale-102 transition-transform duration-300 rounded-xl p-4 text-white shadow-md">
            <div className='gap-1 flex justify-end '>
      <Rating sx={{fontSize:"1rem"}} name="half-rating-read" defaultValue={data.stars} precision={0.5} readOnly />
    </div>
      <h3 className="font-semibold text-sm">{data.name}</h3>
      <p className="text-xs mt-1 leading-snug opacity-85">
        {data.text}
      </p>
    </div>
    ))}
  </motion.div>
 

  {/* SCROLL CONTAINER */}
   

</motion.div>
    </>

 

  )
}

export default Home
