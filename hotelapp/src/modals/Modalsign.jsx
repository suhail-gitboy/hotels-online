import React, { useRef } from "react";
import { ContextDatas } from "../Common/ContextWrapped";
import { motion } from "framer-motion";
import { Field, Formik } from "formik";
import { Signupschema } from "../Common/Hoteldatas";
import { toast } from "sonner";
export default function TriptoSignupModal() {
  const { Setsignmodal, Setloginmodal } = ContextDatas();
  const CloseRef = useRef(null);

  const CloseFunc = (e) => {
    if (CloseRef.current === e.target) Setsignmodal(false);
  };

  const Handlesubmit = (values,{resetForm}) => {
    if(values){
      const Userdetail={
        name:values.name,
        email:values.email,
        password:values.password
      }
    
      const ifExist=JSON.parse(localStorage.getItem("user"))
     
      if(ifExist && ifExist.email==values.email){
        toast.error("user already exist ")
      }
      else{
         localStorage.setItem("user",JSON.stringify(Userdetail))
        toast.success("signed up successfully")
        Setloginmodal(true)
        Setsignmodal(false)
      }
      resetForm()
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm"
        onClick={CloseFunc}
        ref={CloseRef}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-gray-500">Create Account</div>

          <button
            onClick={() => Setsignmodal(false)}
            aria-label="Close"
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Create Your Account
        </h2>

        {/* Formik */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Signupschema}
          onSubmit={Handlesubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
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

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
              >
                Create Account
              </button>
            </form>
          )}
        </Formik>

        {/* Switch to Login */}
        <div className="text-xs text-gray-500 text-center mt-5">
          Already have an account?
          <span
            className="text-blue-600 cursor-pointer hover:underline ml-1"
            onClick={() => {
              Setloginmodal(true);
              Setsignmodal(false);
            }}
          >
            Login
          </span>
        </div>
      </motion.div>
    </div>
  );
}
