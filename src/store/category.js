import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils";



const initialState={
    category:[],
    categoryStatus:STATUS.IDLE
}

export const getCategoryy=createAsyncThunk(
    'getProducts',
    async ()=>{
        const res= await fetch('http://localhost/learn-backend/category.php')
        const data =res.json()
        return data
    }
)


const phpCategory =createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getCategoryy.pending,state=>{
            state.categoryStatus=STATUS.LOADING
        })
        .addCase(getCategoryy.fulfilled,(state,action)=>{
            state.categoryStatus=STATUS.SUCCESS
            state.category=action.payload
        })
        .addCase(getCategoryy.rejected,state=>{
            state.categoryStatus=STATUS.FAIL
        })
    }
})

export default phpCategory.reducer