import { configureStore, createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.cartItems.push(action.payload);
    },
    removeCard: (state, action) => {
      const id = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(id);

      state.cartItems.splice(id, 1);
    },
  },
});
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeCard } = cartSlice.actions;
export default store;
