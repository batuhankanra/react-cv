import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:[]
}


const login =createSlice({
    name:'login',
    initialState,
    reducers:{

        _setUser:(state,action)=>{
            state.user=action.payload
        },
        _destroyUser:state=>{
            state.user=[]
        }

    }
})
export const { _setUser,_destroyUser}=login.actions
export default login.reducer