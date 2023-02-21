import { configureStore } from "@reduxjs/toolkit";
import { countrysSlice } from "./countrys/countrySlice";
import { uiSlice } from "./ui/uiSlice";


export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        countries: countrysSlice.reducer
    }
})
