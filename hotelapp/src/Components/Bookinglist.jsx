import React from 'react'

const Bookinglist = () => {
    const sampleImage = '/mnt/data/IMG_7246ACDF-FB44-45E0-A583-ABD058AA4BD8.jpeg'
  return (
    <div className='p-4 bg-gray-50'>
      

        {/* map */}


        <section className="max-w-4xl mx-auto p-4 sm:p-6">
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Active Reservations</h2>
        <p className="text-sm text-gray-500">View and manage your current bookings here</p>
      </header>

      <ul className="bg-white rounded-md shadow divide-y">


  {/* Second Item */}
  <li className="flex items-start gap-4 p-4 sm:p-6">
    
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden bg-gray-100">
      <img src={sampleImage} className="w-full h-full object-cover" />
    </div>

    <div className="flex-1">
      <h3 className="text-base font-semibold text-gray-800">Grand Seaside Hotel</h3>

      <p className="text-xs text-gray-600 mt-1">
        <span className="mr-3">Check in: <span className="font-medium">12 Mar</span></span>
        <span className="mr-3">Check out: <span className="font-medium">24 Mar</span></span>
        <span>Guests: <span className="font-medium">4 Adults</span></span>
      </p>

   <div className=' '>
    <button className="px-4 py-1.5 rounded-md text-sm bg-green-100 text-green-500  hover:bg-sky-200">update</button>
       <div className="flex justify-end gap-3 mt-4">
        <button className="px-4 py-1.5 rounded-md text-sm bg-sky-100 text-blue-500  hover:bg-sky-200">
          View
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm bg-rose-100 text-red-500 hover:bg-rose-200">
          Cancel
        </button>
      </div>
   </div>

    </div>
  </li>

</ul>

    </section>
        

     
    </div>
  )
}

export default Bookinglist
