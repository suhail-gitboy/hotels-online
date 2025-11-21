import React, { useEffect, useState } from 'react'
import Nav from '../Common/Nav'
import Sidebar from '../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Cardhotel from '../Common/Cardhotel'
import SkeletonCard from '../Common/Skeleton'
import { motion,AnimatePresence } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'
import { CiHome } from "react-icons/ci";
import { BsFastForward } from "react-icons/bs";
import { BsSkipBackward } from "react-icons/bs";
import { Sortingfunc } from '../redux/ProductSlice'
import ScrollToTop from '../Components/Scrollcomp'
import { ContextDatas } from '../Common/ContextWrapped'

const Searchpage = () => {

 
  const {products,loading}=useSelector((state)=>state.Product)
   const [Page,Setpage]=useState(1)
  const Productperpage=10
const Totalpage=Math.ceil(products.length/Productperpage)
const CurrpageLAstindex=Page*Productperpage
const CurrpageFirstindex=CurrpageLAstindex-Productperpage
const AfterSlice=products?.slice(CurrpageFirstindex,CurrpageLAstindex)
const [Skeleton,Setskeleton]=useState(false)

const Dispatch=useDispatch()
const HandleSelectChange=(value)=>{


Dispatch(Sortingfunc(value))


}
  useEffect(()=>{

    Setskeleton(true)
    setTimeout(() => {
      Setskeleton(false)
    }, 2000);

  },[])
  const SkeletonCount=products.length>0?products.length:6;

  const Forward=()=>{
    if(Page!==Totalpage){
      Setpage(Page+1)
    }
  }
  const Backword=()=>{
    if(Page!==1){
      Setpage(Page-1)
    }
  }
  return (
<motion.div initial={{ y: -20, opacity: 0 }}
animate= {{ y: 0, opacity: 1, damping: 5 }}
exit={{ y: 60, opacity: 0 }}
transition={{ type: 'spring', stiffness: 150, damping: 10 }} >
  
<Nav search={"search"} />
<div className='px-6 sm:px-9 md:px-16 lg:px-20 mt-10'>
    <div className=' flex'>
        <div className='  -translate-x-full md:translate-x-0 md:mr-4 absolute md:static left-0  md:w-1/4'>
<Sidebar/>
        </div>
        <div className='w-full md:w-3/4'>
      <div className='flex justify-between'>
          <h1 className="text-xl md:text-3xl  font-semibold mb-4">Explore 200+ Resorts in Kerala</h1><Link to="/" className='font-light flex justify-center items-center text-blue-800 text-sm px-2 py-1 rounded-md bg-blue-100'><CiHome className='text-xl mr-2'/> Home</Link>
      </div>
       <div className='px-4 rounded-xl border w-fit border-black/10'>
         <select name="" onChange={(e)=>HandleSelectChange(e.target.value)}  id="" className='p-3 outline-0 '>
              <option selected>sort by:low to high</option>
            <option value="lowhigh">low to high</option>
            <option value="highlow">high to low</option>
            <option value="toprate">high rating</option>
            <option value="lowrate">low rating</option>
        </select>
       </div>

       {/* main */}
 <div className='mt-10  overflow-y-auto  space-y-3 h-[120vh] mb-20'>
      {
        Skeleton?(<div>{[...Array(SkeletonCount)].map((data,id)=>(
  <SkeletonCard key={id}/>
        ))
         
          }</div> ):(
          AfterSlice.map((data,id)=>(
            <AnimatePresence>

 <Cardhotel data={data} id={id} />

          
      
         </AnimatePresence>
        )) 
      
    )
      }
 </div>
<div className='w-4xl mx-auto flex justify-center items-center space-x-2.5 mb-20'>
  <button onClick={Backword}><BsSkipBackward/></button>
  <h1 className='text-gray-600 text-xl font-semibold'>page {Page} of {Totalpage}</h1>
  <button onClick={Forward}><BsFastForward/></button>
</div>
        </div>

    </div>

</div>
</motion.div>
  )
}

export default Searchpage
