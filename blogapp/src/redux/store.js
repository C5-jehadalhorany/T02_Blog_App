import { configureStore } from "@reduxjs/toolkit";
import isloginSlice from "./reducers/login";
import  postSlice  from "./reducers/post";

export default configureStore({
    reducer: {
        login: isloginSlice,
        post: postSlice
    }
})