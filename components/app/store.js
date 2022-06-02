import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UderSlice"

export default configureStore({
    reducer:{
       
        user:userReducer,
      
    },
});
