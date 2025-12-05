import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../movies/movieSlices";
import userReducer from "./user/userSlices";
import SubscriptionReducer from "./SubscriptionSlice";
const store = configureStore({
    reducer:{
        movies: MovieReducer,
        user: userReducer,
        subscription: SubscriptionReducer,
      
    }
    
});
export default store