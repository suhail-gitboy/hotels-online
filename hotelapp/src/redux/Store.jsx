import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./ProductSlice"
import BookingSlice from "./BookingSlice"
export const store=configureStore({
    reducer:{
        Product:ProductSlice,
        Booking:BookingSlice
    }
})