import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

let initialState = {
    movie: null
}

const getSingle = createAsyncThunk(

    'singleMovie/getSingle',
    async ({id})=>{
        const response_data = await moviesService.getSingle(id)
        return response_data;
    }
);

const singleMovieSlice = createSlice({
    name:'singleMovieSlice',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getSingle.fulfilled, (state,action)=>{
                const{ data } = action.payload;
                state.movie = data
            })
    }
})





const {reducer:singleMovieReducer} = singleMovieSlice

const singleMovieActions = {
    getSingle
}

export {
    singleMovieReducer,
    singleMovieActions
}