import { configureStore } from "@reduxjs/toolkit";
import sliceResult from "./reduce/slice";

const store = configureStore({
  reducer: {
    apiResult: sliceResult
  }
}) 

export default store;