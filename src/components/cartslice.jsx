import { createSlice } from "@reduxjs/toolkit";

const cartslice= createSlice({
    name: "slice1",
    initialState: {items:[]},
    reducers: {
        additem:(state,action)=>{
           state.items.push(action.payload);
        },
        remove:(state)=>{
             state.items.pop();
        },
        clearcart:(state)=>{
            state.items.length=0;
        }
    },
});

export default cartslice.reducer;
export const {additem,remove,clearcart} = cartslice.actions;