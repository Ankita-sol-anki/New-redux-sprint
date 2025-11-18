import {createSlice} from "@reduxjs/toolkit";


let initialState ={
allMovies : [],
selectedMovies :null,

};


const movieSlices = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    
    });
 export default movieSlices.reducer