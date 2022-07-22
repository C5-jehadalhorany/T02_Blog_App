import { configureStore } from "@reduxjs/toolkit";
import isloginSlice from "./reducers/login";
import postSlice from "./reducers/post";
import userSlice from "./reducers/user";
import albomSlice from "./reducers/albom"

export default configureStore({
    reducer: {
        login: isloginSlice,
        post: postSlice,
        user: userSlice,
        albom: albomSlice

    }
}); 
