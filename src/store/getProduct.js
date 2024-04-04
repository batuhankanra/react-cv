import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils";

const initialState ={
    getProduct:[],
    getProducttStatus:STATUS.IDLE
}
export const getProductPhp=createAsyncThunk(
    'getProductPhp',
    async (id)=>{
        const res= await fetch(`http://localhost/learn-backend/getProduct.php?id=${id}`)
        const data= res.json()
        return data
    }
)


const getProductt =createSlice({
    name:'getProduct',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProductPhp.pending,(state)=>{
            state.getProducttStatus=STATUS.LOADING
        })
        .addCase(getProductPhp.fulfilled,(state,action)=>{
            state.getProducttStatus=STATUS.SUCCESS
            state.getProduct=action.payload
        })
        .addCase(getProductPhp.rejected,(state)=>{
            state.getProducttStatus=STATUS.FAIL
        })
    }

})
export default getProductt.reducer