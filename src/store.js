import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menus/menuSlice";
import productReducer from './features/products/productSlice'

export const store = configureStore({
    reducer:{
        product:productReducer,
        menu:menuReducer,
        cart:cartReducer
    },
}) 