import { configureStore } from "@reduxjs/toolkit";
import { api}  from "../Features/BlinkitSlice";

export const Store = configureStore({
    reducer:{
        apiKey :api.reducer
    }
})