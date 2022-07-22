import { createSlice } from "@reduxjs/toolkit";


export const albom = createSlice({
    name: "albom",
    initialState: {
        alboms: [],
    },
    reducers: {
        setalboms: (state, action) => {
            // console.log(action.payload);
            state.alboms = action.payload;

        },
    },
});

export const { setalboms } = albom.actions;
export default albom.reducer;

