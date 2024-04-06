import { createSlice } from "@reduxjs/toolkit";

const initialState={
    basket:[]
}

const basket =createSlice({
    name:'basket',
    initialState,
    reducers:{
        _addBasket:(state,action)=>{
            state.basket.push(action.payload)
        },
        _removeBasket:(state,action)=>{
            if(state.basket!==action.payload){
                
            }
        }

    }
})
export const {_addBasket} =basket.actions
export default basket.reducer