import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  cartItems: getCartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../CartItems";

// const initialState = {
//   cartItems: cartItems,
//   amount: 0,
//   total: 0,
//   isLoading: true,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
//     },
//     increase: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount + 1;
//     },
//     decrease: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount - 1;
//     },
//     calculateTotals: (state) => {
//       let amount = 0;
//       let total = 0;
//       state.cartItems.forEach((item) => {
//         amount += item.amount;
//         total += item.amount * item.price;
//       });
//       state.amount = amount;
//       state.total = total;
//     },
//   },
// });

// export const { clearCart, removeItem, increase, decrease, calculateTotals } =
//   cartSlice.actions;
export default cartSlice.reducer;
