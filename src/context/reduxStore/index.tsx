import { configureStore } from "@reduxjs/toolkit";
import productReducer from "src/slices/product";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
