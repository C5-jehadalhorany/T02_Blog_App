import { configureStore } from "@reduxjs/toolkit";
import isloginSlice  from "./reducers/login";
export default configureStore({
    reducer:{
        login:isloginSlice
    }
})