import {configureStore} from "@reduxjs/toolkit"
import HomeSlice from "./homeSlice";
const Store = configureStore({
    reducer:{
        homeData : HomeSlice
    }
})

export default Store;