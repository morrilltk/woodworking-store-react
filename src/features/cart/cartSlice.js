import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartsArray: [
    {
      id: 3,
      title: "test 4",
      desc: "desc 4",
      price: 60,
      quantity: 1,
      imagePath: "https://picsum.photos/300/200",
    },
    {
      id: 4,
      title: "test 5",
      desc: "desc 5",
      price: 100,
      quantity: 10,
      imagePath: "https://picsum.photos/300/200",
    },
    {
      id: 5,
      title: "test 6",
      desc: "desc 6",
      price: 50,
      quantity: 15,
      imagePath: "https://picsum.photos/300/200",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export const cartReducer = cartSlice.reducer;
export const selectAllCartItems = state => {
  return state.cart.cartsArray;
};
