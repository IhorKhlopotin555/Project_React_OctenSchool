import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

let initialState = {
    pages:null,
    next:null,
    prev:null,
    moviesListCard:[]
}

const getAll = createAsyncThunk(

    'moviesListCardSlice/getAll',
    async ({page})=>{
        const {data} = await moviesService.getAll(page)
        const res_obj = {}
        res_obj.info = {
            total_pages: data.total_pages,
            next: data.page+1,
            prev: data.page-1
        }
        res_obj.results = data.results;
        return res_obj
    }
);

const moviesListCardSlice = createSlice({
    name:'moviesListCardSlice',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                const{ info, results} = action.payload;

                state.pages = info.total_pages
                state.next = info.next
                state.prev = info.prev
                state.moviesListCard = results    
            })
    }
})





const {reducer:moviesListCardReducer} = moviesListCardSlice

const moviesListCardActions = {
    getAll
}

export {
    moviesListCardReducer,
    moviesListCardActions
}