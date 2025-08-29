import { createSlice } from "@reduxjs/toolkit";

const cartItem = {
  name: "Lavender",
  image:
    "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cost: "$20",
  quantity: 4,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [
        ...state.items,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name != action.payload.name
      );
    },
    updateQuantity: (state, action) => {
      const { name, type } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        if (type === "INC") {
          item.quantity += 1;
        } else if (type === "DEC") {
          item.quantity = Math.max(1, item.quantity - 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
