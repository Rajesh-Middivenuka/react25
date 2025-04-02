import { configureStore } from "@reduxjs/toolkit";
// it gives us to store to our applications
import cartReducer from "./cartSlice"
const appStore=configureStore({
    reducer:{
      cart:cartReducer
    }
});
export default appStore;

// it is a store then we have to provide the store to application

// next step we need to provide the store to our applications for accessing the data.
