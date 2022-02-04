import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
   reducerPath: 'usersApi',
   tagTypes: ['User'],
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
   endpoints: (build) => ({
      getUsers: build.query({
         query: () => '/users',
      }),
      getUser: build.query({
         query: userId => `/users/${userId}`
      })
   }),

})
export const { useGetUsersQuery, useGetUserQuery } = usersApi;