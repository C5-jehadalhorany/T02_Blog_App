import { configureStore } from "@reduxjs/toolkit";
import isloginSlice from "./reducers/login";
import  postSlice  from "./reducers/post";
import userSlice from "./reducers/user";

export default configureStore({
    reducer: {
        login: isloginSlice,
        post: postSlice,
        user: userSlice
    }
}); 
