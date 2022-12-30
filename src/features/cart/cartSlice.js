import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const stateIdx = state.cartArray.findIndex(
        stateProduct => stateProduct.id === action.payload.id
      );
      if (stateIdx >= 0) {
        console.log({ stateIdx });
        const stateProduct = state.cartArray[stateIdx];
        state.cartArray[stateIdx] = {
          ...stateProduct,
          quantity: stateProduct.quantity + parseInt(action.payload.quantity),
        };
      } else {
        state.cartArray.push(action.payload);
      }

      // const id = action.payload.id;
      // if (state.cartObj[id]) {
      //   state.cartObj = {
      //     ...state.cartObj,
      //     [id]: {
      //       ...state.cartObj[id],
      //       quantity: state.cartObj[id].quantity + action.payload.quantity,
      //     },
      //   };
      // } else {
      //   state.cartObj = { ...state.cartObj, [id]: action.payload };
      // }

      // state.cartOjb = [...state.cartArray, action.payload];
    },
    removeCartItem: (state, action) => {
      state.cartArray = state.cartArray.filter(
        product => product.id !== action.payload.id
      );
    },
    changeCartItemQuantity: (state, action) => {
      if (action.payload.quantity <= 0) {
        state.cartArray = state.cartArray.filter(
          product => product.id !== action.payload.id
        );
      } else {
        const stateIdx = state.cartArray.findIndex(
          stateProduct => stateProduct.id === action.payload.id
        );
        if (stateIdx >= 0) {
          const stateProduct = state.cartArray[stateIdx];
          state.cartArray[stateIdx] = {
            ...stateProduct,
            quantity: parseInt(action.payload.quantity),
          };
        } else {
          console.error("Unable to change quantity with", { state, action });
        }
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProductToCart, removeCartItem, changeCartItemQuantity } =
  cartSlice.actions;
export const selectAllCartItems = state => {
  return state.cart.cartArray;
};
