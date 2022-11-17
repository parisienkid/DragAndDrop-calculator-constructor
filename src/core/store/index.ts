import { configureStore } from "@reduxjs/toolkit";
import  sort  from '../reducers/sortSlice';


const store = configureStore({
    reducer: {sort},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;