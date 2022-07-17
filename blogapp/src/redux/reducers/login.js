import { createSlice } from "@reduxjs/toolkit";

const logins = createSlice(
    {
        name: "logins",
        initialState: { islogin: false },
        reducers: {
            setlogin: (state, action) => {
                state.islogin = true
            },

            setlogout: (state, action) => {
                state.islogin = false
            }
        }
    }
)


export const { setlogin, setlogout } = logins.actions

export default logins.reducer