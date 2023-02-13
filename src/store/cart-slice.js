import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalCount = action.payload.totalCount;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload);
      }

      state.totalCount++;
      state.changed = true;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity === 1) {
        state.items.pop(existingItem);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalCount--;
      state.changed = true;
    },
  },
});

export const { addItem, removeItem, replaceCart } = cartSlice.actions;

export default cartSlice.reducer;
