import { createSlice } from "@reduxjs/toolkit";
 const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        latestreleased: null,
        trailerVideo: null,
    },
    reducers: {
        addlatestreleased: (state,action) => {
            state.latestreleased= action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
 });
   

 export const { addlatestreleased, addTrailerVideo } = moviesSlice.actions;
 export default moviesSlice.reducer;