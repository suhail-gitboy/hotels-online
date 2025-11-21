import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const GetapiRedux=createAsyncThunk("product/GetapiRedux",async()=>{
//     const response=await axios.get("https://dummyjson.com/products")

//     console.log(response.data.products);
//     return response.data.products;

    
    

// })
// ,extraReducers:(builder)=>{
//         builder.addCase(GetapiRedux.fulfilled,(state,action)=>{
//             state.products=action.payload
//             state.loading=false
//             state.error=""
//         }),
//         builder.addCase(GetapiRedux.pending,(state,action)=>{
//             state.products=[]
//             state.loading=true
//             state.error=""

//         }),
//         builder.addCase(GetapiRedux.rejected,(state,action)=>{
//              state.products=[]
//             state.loading=false
//             state.error="api call failed"

//         })
//     }


export const GetApiHotel=createAsyncThunk("product/GetApiHotel",async()=>{
    const response = await axios.get("http://localhost:3000/hotel")
    sessionStorage.setItem("hotels",JSON.stringify(response.data))
    return response.data
   
    
    
})

const Initial={
    Allproducts:[],
    products:[],
    FilterDetails:{
        district:"",
        length:0
    },
    loading:false,
    error:null
}

const ProductSlice=createSlice({
    name:"product",
    initialState:Initial,
    reducers:{
        SearchFilter:(state,action)=>{
            const Data=action.payload
            console.log(Data);
            
           if(Data){
                state.products=state.Allproducts.filter((data)=>{
                   return data.district.toLowerCase().includes(Data.toLowerCase()) || data.city.toLowerCase().includes(Data.toLowerCase())
                   
                })

                state.FilterDetails.length=state.products.length
                state.FilterDetails.district=Data
            }else{
                state.products=state.Allproducts
                 state.FilterDetails.length=state.Allproducts.length
                state.FilterDetails.district="kerala"

            }
        },
        Sortingfunc:(state,action)=>{
            const Data=action.payload
            console.log(Data);
            
            if(Data){

                if(Data==="lowhigh"){
 state.products=[...state.products].sort((a,b)=>a.price-b.price)
                }else if(Data==="highlow"){
                    state.products=[...state.products].sort((a,b)=>b.price-a.price)
                }else if(Data==="toprate"){
                    state.products=[...state.products].sort((a,b)=>a.rating-b.rating)
                }else if(Data=="lowrate"){
                     state.products=[...state.products].sort((a,b)=>b.rating-a.rating)
                }else{
                    state.products=state.Allproducts
                }
               
            }
        }

    },extraReducers:(builder)=>{
        builder.addCase(GetApiHotel.fulfilled,(state,action)=>{
            state.loading=false
            state.Allproducts=action.payload
            state.products=action.payload
            state.error=null
        }),
        builder.addCase(GetApiHotel.pending,(state,action)=>{
            state.loading=true
            state.Allproducts=[]
            state.error=null
        }),
        builder.addCase(GetApiHotel.rejected,(state,action)=>{
            state.loading=true
            state.Allproducts=[]
            state.error="error loading"

        })
    }})

export const {SearchFilter,Sortingfunc} =ProductSlice.actions;
export default ProductSlice.reducer;