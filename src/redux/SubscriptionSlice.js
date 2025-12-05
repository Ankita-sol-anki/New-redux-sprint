import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status: null,
    date : null,
    expired : true,

}

 const SubscriptionSlice = createSlice ({
    name: " Subs",
    initialState :{}
 });
 export default SubscriptionSlice.reducer
    