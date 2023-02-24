import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mapsApi} from "@/api/maps";

const rootReducer = combineReducers({
    [mapsApi.reducerPath]: mapsApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mapsApi.middleware)
})