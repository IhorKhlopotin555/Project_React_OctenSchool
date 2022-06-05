import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {moviesListCardReducer} from "./slices";
import {singleMovieReducer} from "./slices";

const rootReducer = combineReducers({
    moviesListCard:moviesListCardReducer,
    singleMovie:singleMovieReducer
});

const store = configureStore({
    reducer:rootReducer
})

export {
    store
}