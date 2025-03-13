import { createSlice } from "@reduxjs/toolkit";
import { limit } from "./constant";
const Chatslice = createSlice(
    {
        name:'chat',
        initialState:{
            messages:[]
        },
        reducers:{
            addmessage:(state,action)=>
            {
                state.messages.splice(limit,1);
                state.messages.unshift(action.payload);
            }
        }
    }
)
export default Chatslice.reducer;
export const {addmessage} = Chatslice.actions;