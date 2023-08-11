import { createSlice } from "@reduxjs/toolkit";

export const counterS = createSlice({
    name: 'counterSlice',
    initialState:{
        counter: 0
    },
    reducers: {
        increment: function(state){
            state.counter += 1;
        },
        decrement: function(state){
           state.counter -= 1; 
        }
    }
})

export const {increment, decrement} = counterS.actions
const counterReducer = counterS.reducer
export default counterReducer