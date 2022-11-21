import { configureStore } from "@reduxjs/toolkit";
import sort from '../reducers/sortSlice';
import calc from '../reducers/calcSlice';


const store = configureStore({
    reducer: {sort, calc},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;