import React, { useEffect, useState } from 'react'
import Nav from '../Common/Nav'
import {  data, Link, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Cardhotel from '../Common/Cardhotel';
import { easeIn, motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { GetApiHotel } from '../redux/ProductSlice';
import { Addapi, AddApiBooking } from '../ServicesApi/crud/Adding';
import Wishlist from '../Components/Wishlist';
import { toast } from 'sonner';
import { ContextDatas } from '../Common/ContextWrapped';
import Swal from 'sweetalert2'
const Detailpage = () => {
    const SAMPLE_IMG = "/mnt/data/IMG_B3E8D53A-23CB-4161-BF77-FE8E8E656462.jpeg";

  const {isLogged,SetisLogged,loginmdal,Setloginmodal}=ContextDatas()

    const [Details,Setdetails]=useState(null)

const [Booking,Setbooking]=useState({
  checkin:"",
  checkout:"",
  adult:""

})

const Foradd={...Details,...Booking}

  const FuncSubmit=async(data)=>{
   if(!isLogged){
Setloginmodal(true)
   }else if(!Booking.checkin || !Booking.checkout || !Booking.adult){
    toast.error("fill the details first")
   }
   else{

    
 const response= await AddApiBooking({Foradd
 })
 console.log(response);
 
Swal.fire({
  title: "confirmed your booking",
  text: "our staffs will contacts you soon",
  icon: "success"
});
   }
    
  }
const {id}=useParams()
    useEffect(()=>{
 const Sessiondata=JSON.parse(sessionStorage.getItem("hotels"))
   if(Sessiondata.length>1){

        const Finded=Sessiondata.find((data)=>data.id==id)
        Setdetails(Finded)
       
   }

  
        
    },[id])
  const {products,loading}=useSelector((state)=>state.Product)
    if(!Details){
        return <p>loading..</p>
    }

const FuncAdd=async(data)=>{

  const response=await Addapi({data})
  if(response.status>=200 && response.status<=299){
    
    toast.success("added to wishlist")
  }else{
    toast.error("server error")
    console.log(response);
  }
}

  return (
   <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, ease:easeIn}} >
   <Nav/>
   <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{Details.name}<span className="text-amber-400">★★★★</span></h1>
            <p className="text-sm text-slate-500 mt-1">{Details.city}, {Details.district}</p>

            {/* Tabs */}
            <nav className="mt-6">
              <ul className="flex gap-6 text-sm font-medium text-slate-600">
                <li className="border-b-2 border-blue-500 pb-2 text-blue-600">Overview</li>
                {/* {
                    Details.amenities.map((data)=>(<li className="pb-2">{data}</li>))
                } */}
               
              </ul>
            </nav>
          </div>

          <div className="flex p-1 rounded-full rounded border border-gray-400  items-center gap-4">
                 <div onClick={()=>FuncAdd(Details)} className=" p-1 md:p-2 hover:bg-gray-200 bg-white transition-colors duration-200 border-1 border-white rounded-full">
         <FaRegHeart className=' text-md md:text-xl hover:text-rose-600 text-rose-500' />
         
                 </div>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Gallery (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 row-span-2">
                <div className="relative rounded-lg overflow-hidden shadow-sm">
                  <img src={Details.images[0]} alt="Main room" className="w-full h-80 object-cover" />

                  <div className="absolute left-6 bottom-6 bg-white/95 rounded-full px-4 py-2 shadow-sm flex items-center gap-3">
                    <img src={Details.images[2]} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                    <div className="text-sm">
                      <div className="text-xs text-slate-400">Hotel</div>
                      <div className="text-sm font-medium text-slate-800">{Details.name}</div>
                    </div>
                    <button className="ml-2 text-slate-500">▾</button>
                  </div>
                </div>
              </div>

             {
                Details.images.slice(0,4).map((data)=>(
                     <div className="rounded-lg overflow-hidden shadow-sm">
                <img src={data} alt="pool" className="w-full h-36 object-cover" />
              </div>
                ))

             }

            
            
            </div>

            {/* Description */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Description</h2>
              <p className="mt-3 text-sm text-slate-600 max-w-2xl">{Details.description}
              </p>

              <ul className="mt-4 list-disc list-inside text-sm text-slate-600 max-w-2xl">
                <li>Simply elegant in all respects, this beautiful property offers a wonderful location that enhances your stay.</li>
                <li>Enjoy spacious rooms with great amenities and 6-star service from a superb team.</li>
              </ul>

        
            </section>

            {/* Amenities heading (placeholder) */}
            <section className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">Amenities</h3>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4 text-sm text-slate-600">
                {
                    Details.amenities.map((data)=>(<div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 9 4-18 3 9h4" /></svg>{data}</div>))
                }
                
              </div>
            </section>
          </div>

          {/* Right: Booking Card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-xl border border-slate-100 p-5 shadow-sm bg-white">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs text-slate-500">Check-in</label>
                    <input type="date" value={Booking.checkin|| "12/09/2025"} onChange={(e)=>Setbooking({...Booking,checkin:e.target.value})} className="mt-2 bg-gray-300 py-2 px-4 text-sm font-medium text-slate-700"/>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-slate-500">Check-out</label>
                    <input type='date' value={Booking.checkout|| "12/13/2025"} onChange={(e)=>Setbooking({...Booking,checkout:e.target.value})}  className="mt-2 text-sm font-medium text-slate-700 bg-gray-300 py-2 px-4"/>
                  </div>

                  
                </div>
     <div>
                  
                  <label className="block text-xs text-slate-500">adults total</label>
                  <input value={Booking.adult} onChange={(e)=>Setbooking({...Booking,adult:e.target.value})} className="mt-2 text-sm font-medium text-slate-700 bg-gray-300 py-2 px-4"/>
                </div>
                <hr className="my-4" />

             

                 

                <div className="mt-6">
                  <div className="text-xs text-slate-500">Prices:</div>
                  <div className="text-sm font-medium text-slate-700 mt-1">${Details.price} per adult</div>
                  <div className="text-sm font-medium text-slate-700 mt-1">total price:{Details.price*Booking.adult}</div>
                </div>
            

                <button className="mt-6 w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow hover:bg-blue-700" onClick={FuncSubmit}>book Rooms</button>
              </div>

              <p className="mt-3 text-xs text-slate-400">No payment yet • Free cancellation on most rooms</p>
            </div>
          </aside>
        </div>
      </div>
    </div>

   <div className='px-5 md:px-15 lg:px-20'>
     <h3 className='text-3xl font-semibold mb-10 mt-10'>Explore Similar Properties</h3>
     <div className='h-[100vw] overflow-y-auto gap-y-3 mb-10'>
        {
products.slice(0,15).map((data,id)=>{

  return(<Link  to={`/roomdetail/${data.id}`}> <Cardhotel data={data} id={id} /></Link>   )
})
        }

     </div>
   </div>
   </motion.div>
  )
}

export default Detailpage
