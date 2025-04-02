import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    // we have to wirte reducer function each action
    // state is get access to items array intial state and action is used to modify
    reducers:{
        addItem:(state,action)=>{
           state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
         state.items.length=0
        }
    }
})
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer