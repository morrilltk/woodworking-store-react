import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { cartReducer } from "../features/cart/cartSlice";
import { productsReducer } from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger]),
});
