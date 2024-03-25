import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getCategory=createAsyncThunk('category', async ()=>{
    const res=await fetch('https://fakestoreapi.com/products/categories')
    const data = res.json()
    return data
})

const initialState={
    categories:[]
}

const cSlice =createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.categories=action.payload
        })
    }
})
export default cSlice.reducer