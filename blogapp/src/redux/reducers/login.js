import { createSlice } from "@reduxjs/toolkit";
export const isloginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        logout: true,
        userId: localStorage.getItem("userId") || ""
    },
    reducers: {
        setislog: (state, action) => {
            state.login = true
            state.userId = action.payload
            localStorage.setItem("userId", action.payload)
        },
        setislogout: (state, action) => {
            state.logout = false
            state.userId = ""
            localStorage.clear()
        },
    }
})
export const { setislog, setislogout } = isloginSlice.actions
export default isloginSlice.reducer