import React, { useEffect } from 'react'

import { Outlet } from 'react-router'
import Footer from '../Common/Footer'
import { ContextDatas } from '../Common/ContextWrapped'
import TriptoAuthModal from '../modals/Modallogin'
import { AnimatePresence } from 'framer-motion'
import TriptoSignupModal from '../modals/Modalsign'
import { useDispatch } from 'react-redux'
import { GetApiHotel } from '../redux/ProductSlice'
import ScrollToTop from '../Components/Scrollcomp'

const Mainlayout = () => {
  const {loginmdal,signmodal}=ContextDatas()
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(GetApiHotel())
  },[])
  
  return (
    
 <>
     
 <AnimatePresence>
 {loginmdal&&<TriptoAuthModal/>}
 {signmodal&&<TriptoSignupModal/>}
 </AnimatePresence>


 <Outlet/>
 <Footer/>

 </>
  )
}

export default Mainlayout
