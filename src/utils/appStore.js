import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //this reduce is responsible modify our app store 
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;