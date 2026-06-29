import { createSlice } from "@reduxjs/toolkit";
 const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        latestreleased: null,
    },
    reducers: {
        addlatestreleased: (state,action) => {
            state.latestreleased= action.payload;
        },
    }
 });
   

 export const { addlatestreleased } = moviesSlice.actions;
 export default moviesSlice.reducer;