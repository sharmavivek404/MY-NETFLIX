import moviesReducer from "./movieSlice";
import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});
 export default appStore;