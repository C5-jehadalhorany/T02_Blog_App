import { configureStore } from "@reduxjs/toolkit";
import loginReduser from "./reducers/login";


export default configureStore({
    reducer: {
        logins: loginReduser,

    },
});
