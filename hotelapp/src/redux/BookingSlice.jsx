import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Fetchingdata } from "../ServicesApi/crud/Fetching"
import { Wishlisturl } from "../ServicesApi/url";
import axios from "axios";

export const GetWishlist=createAsyncThunk("booking/Getwishlist",async()=>{
     const Response= await axios.get("http://localhost:3000/wishlist")
   
       console.log(Response.data);
     
     return Response.data
   
})

const Initialstates={
    wishlist:[],
    booked:[]
}

const Bookingslice=createSlice({
    name:"booking",
    initialState:Initialstates,
    reducers:{

    },extraReducers:(builder)=>{
        builder.addCase(GetWishlist.fulfilled,(state,action)=>{
            state.wishlist=action.payload
        })
    }
})
export const {}= Bookingslice.actions;
export default Bookingslice.reducer;