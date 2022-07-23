import { createSlice } from "@reduxjs/toolkit";
export const isloginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        logout: true,
        userId: localStorage.getItem("userId") || "",
        username: localStorage.getItem("username") || "",
        profile: JSON.parse(localStorage.getItem("profile")) || []


    },
    reducers: {
        setislog: (state, action) => {
            state.login = true
            state.userId = action.payload
            localStorage.setItem("userId", action.payload)
            state.username = action.payload.username
            localStorage.setItem("username", state.username)
        },
        setislogout: (state, action) => {
            state.logout = false
            state.userId = ""
            localStorage.clear()
        },
        getinfomation: (state, action) => {
            state.profile = action.payload
            console.log(action.payload);
            localStorage.setItem("profile", JSON.stringify(action.payload));
            state.username = action.payload.username
            localStorage.setItem("username", state.username)
        },
        setisname: (state, action) => {
            // console.log(action.payload);
            state.name = action.payload
            localStorage.setItem("username", state.name)
        },
        updatein: (state, action) => {
            state.profile = action.payload
            localStorage.setItem("profile", JSON.stringify(action.payload));
            state.username = action.payload.username
            localStorage.setItem("username", state.username)
        },




    }
})
export const { setislog, setislogout, setisname, getinfomation, updatein } = isloginSlice.actions
export default isloginSlice.reducer