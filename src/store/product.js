import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils";

const initialState={
    product:[],
    productStatus:STATUS.IDLE
}
export const getProduct=createAsyncThunk('getProduct',
    async ()=>{
        const res=await fetch('http://localhost/learn-backend/product.php')
        const data =res.json()
        return data
    }
)

const phpProduct=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProduct.pending,state=>{
            state.productStatus=STATUS.LOADING
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.productStatus=STATUS.SUCCESS
            state.product=action.payload
        })
        .addCase(getProduct.rejected,state=>{
            state.productStatus=STATUS.FAIL
        })
    }
})
export default phpProduct.reducer
