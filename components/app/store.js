import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UderSlice"
import ResReducer from "../features/ResSlice"
export default configureStore({
    reducer:{
       
        user:userReducer,
        resturant:ResReducer,
      
    },
});
