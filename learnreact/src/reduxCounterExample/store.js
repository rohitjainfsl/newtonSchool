//Redux-Toolkit instead of using react-redux
// import createStore from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

// createStore()
export const reduxStore = configureStore({
    reducer: {
        counterR: counterReducer
    }
})