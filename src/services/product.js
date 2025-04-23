import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "/products",
    }),
    getOneProduct: build.query({
      query: (id) => `/products/${id}`,
    }),
    updateProduct: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
  refetchOnFocus: true,
});

export const { useGetAllProductsQuery, useGetOneProductQuery, useUpdateProductQuery } =
  productApi;
