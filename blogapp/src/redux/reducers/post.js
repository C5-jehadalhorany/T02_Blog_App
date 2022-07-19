import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
    name: "post",
    initialState: {
        post: [],
    },
    reducers: {
        setpost: (state, action) => {
            state.post = action.payload;
        },
        addPost: (state, action) => {
            state.post.push(action.payload);

        },
        updatePost: (state, action) => {
            state.post = state.post.map((element, index) => {
                if (element.id === action.payload.id) {
                    return element.id = action.payload
                } else {
                    return element
                }
            });
        },
        deletepost: (state, action) => {
            state.post = state.post.filter((element) => {
                // console.log(action.payload  , "....." , element.id);  
                return element.id != action.payload;
            });
        }
    }


})


export const { setpost,
    addPost,
    updatePost,
    deletepost,
} = postSlice.actions

export default postSlice.reducer