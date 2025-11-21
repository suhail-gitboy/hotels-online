import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import DupliHome from './Autocompletesearch/duplicatehpme'
import HotelCardExlusive from './Common/HotelCardExlusive'
import { Toaster } from "sonner"
import { AutumnKochi, Datasforhotel, Springdata, WinterNewYearKerala } from './Common/Hoteldatas'
import { AnimatePresence } from 'framer-motion'
import Searchpage from './pages/Searchpage'
import Profile from './pages/Profile'
import Detailpage from './pages/Detailpage'
import Wishlist from './Components/Wishlist'
import Bookinglist from './Components/Bookinglist'
import Mainlayout from './Layout.jsx/Mainlayout'
import React from 'react'


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Mainlayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          children:[
            {index:true,element:<HotelCardExlusive data={Datasforhotel} />},
            {path:"home/spring",element:<HotelCardExlusive data={Springdata} />},
            {path:"home/automn",element:<HotelCardExlusive data={AutumnKochi} />},
            {path:"home/winter",element:<HotelCardExlusive data={WinterNewYearKerala} />},
          ]
        },

        {path:"search",element:<Searchpage/>},
        {path:"roomdetail/:id",element:<Detailpage/>},

        {
          path:"profile",
          element:<Profile/>,
          children:[
            {index:true,element:<>userdetails</>},
            {path:"bookings",element:<Bookinglist/>},
            {path:"wishlists",element:<Wishlist/>},
            {path:"reviews",element:<>comments</>},
          ]
        },

        {path:"dupli",element:<DupliHome/>},
        {path:"*",element:<>empty</>},

      ]
    }
  ])

return( 
  <>
    <Toaster position='top-center'/>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </>
) 
}

export default App
