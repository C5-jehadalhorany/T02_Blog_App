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
        updatepost: (state, action) => {
            state.post = state.post.map((element, index) => {
                // console.log(element.id  );
                // console.log(action.payload);
                if (element.id == action.payload.id) {
                    element.body = action.payload.inputs2 || element.body
                    element.title = action.payload.inputs || element.title
                    return element
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
    updatepost,
    deletepost,
} = postSlice.actions

export default postSlice.reducer