// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import counterReducer from "../features/counter/counterSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: counterReducer,
});

export default store;