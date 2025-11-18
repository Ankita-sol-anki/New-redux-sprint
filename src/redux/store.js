import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../movies/movieSlices";
import userReducer from "./user/userSlices";
const store = configureStore({
    reducer:{
        movies: MovieReducer,
        user: userReducer,
      
    }
    
});
export default store