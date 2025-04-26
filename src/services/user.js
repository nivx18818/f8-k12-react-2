import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => "/users",
    }),
    getUserById: build.query({
      query: (id) => `/users/${id}`,
    }),
    getUserByUsername: build.query({
      query: (username) => `/users/${username}`,
    }),
    updateUser: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserByUsernameQuery,
  useUpdateUserMutation,
} = userApi;
