import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoggedIn : false,
    userDetails : null,
    isLoading : true,

};

const userSlices = createSlice({
    name : "user",
    initialState,
    reducers :{
        removeLoader:(state,action)=>{
            state.isLoading = false;
        },
        setUserDetails:(state,action)=>{
            state.userDetails = action.payload;
        },
    },
        
        
        });
        export const {removeLoader,setuserDetails} = userSlices.actions;
  
 export default userSlices.reducer;