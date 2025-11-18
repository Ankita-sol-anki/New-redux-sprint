import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoggedIn : false,
    userDetails : null,
    isLoading : true,

};

const userSlices = createSlice({
    name : "user",
    initialState ,
    reducers : {
        setLoginState : (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

 export default userSlices.reducer;