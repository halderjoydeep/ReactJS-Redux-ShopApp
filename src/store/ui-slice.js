import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true, notification: null };

const uiSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      if (action.payload === null) {
        state.notification = null;
      } else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    },
  },
});

export const { toggleCart, setNotification } = uiSlice.actions;
export default uiSlice.reducer;
