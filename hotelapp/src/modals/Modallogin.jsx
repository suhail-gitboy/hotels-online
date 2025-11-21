import React, { useState ,useRef} from "react";
import { ContextDatas } from "../Common/ContextWrapped";
import { motion } from "framer-motion";
import { Formik,Field } from "formik";
import { LoginSchema } from "../Common/Hoteldatas";
import { toast } from "sonner";
// Single-file React component (Tailwind CSS). Default export a React component.
// Usage: <TriptoAuthModal open={isOpen} onClose={() => setIsOpen(false)} />

export default function TriptoAuthModal() {
 const {loginmdal,Setloginmodal,signmodal,Setsignmodal ,isLogged,SetisLogged}=ContextDatas()

const CloseRef=useRef(null)
const Closefunc=(e)=>{
    if(CloseRef.current==e.target){
        Setloginmodal(false)
    }
}


const Submitdata=(values)=>{
  console.log(values);
  const userData=JSON.parse(localStorage.getItem("user"))
  if(!userData){
    toast.error("your doesn't exist")
    
  }else if(userData.email==values.email && userData.password==values.password){
toast.success("logined successfully")
    Setloginmodal(false)
    SetisLogged(true)
  } else{
   toast.error("invalid email or password")
  }
  
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm" ref={CloseRef}
  onClick={Closefunc}
      />

      {/* modal card */}
     <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2 }}
  exit={{opacity:0.3}}
  className="relative z-10 w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-2xl"
>
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <div className="text-xs text-gray-500">Login</div>
    <button
      onClick={() => Setloginmodal(false)}
      aria-label="Close"
      className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  {/* Title */}
  <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">Welcome Back</h2>

  {/* Email */}

<Formik
  validationSchema={LoginSchema}
  initialValues={{ email: "", password: "" }}
  onSubmit={Submitdata}
>
  {({ errors, touched, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <label className="block text-sm text-gray-600 mb-2">Email</label>
      <div>
        <Field
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <Field
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium mb-4"
      >
        Login
      </button>
    </form>
  )}
</Formik>

  {/* Divider */}
  <div className="text-xs mt-6 text-gray-500 text-center">
    Don’t have an account?
    <span className="text-blue-600 cursor-pointer hover:underline ml-1" onClick={()=>{Setsignmodal(true);Setloginmodal(false)}}>
      Sign Up
    </span>
  </div>
</motion.div>

    </div>
  );
}