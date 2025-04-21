import productService from "@/services/productService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  const res = await productService.getAll();

  if (res.status === "success") {
    return res.data.items;
  } else {
    console.error(res?.message);
    return [];
  }
});

const productsSlide = createSlice({
  name: "auth",
  initialState: {
    products: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.products = [];
        state.isLoading = false;
      });
  },
});

export { getAllProducts };
export default productsSlide.reducer;
