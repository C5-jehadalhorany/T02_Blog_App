import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {
        users: (state, action) => {
            state.user = action.payload;
            
        },
    },
});

export const { users } = user.actions;
export default user.reducer;