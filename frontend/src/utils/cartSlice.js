import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);

      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity += 1;
      }
    },

    removeItem: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },

    claerCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, claerCart } = cartSlice.actions;
export default cartSlice.reducer;
