import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//const BASE_URL = 'https://official-joke-api.appspot.com/jokes/';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    //Fetching data
    getJokeByType: builder.query({
      query: type => `${type}`,
    }),

    //Post data
    createPosts: builder.mutation({
      query: ({ title, postBody, userId }) => ({
        url: `posts`,
        method: 'POST',
        body: { title, body: postBody, userId },
      }),
    }),
    //Update post
    // updateposts:builder.mutation({
    //   query: ({ title, postBody, userId }) => ({
    //     url: `posts`,
    //     method: 'PUT',
    //     body: { title, body: postBody, userId },
    //   }),
    // }),

    //Delete post
    deletePosts: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetJokeByTypeQuery,
  useCreatePostsMutation,
  useDeletePostsMutation,
} = jokesApi;
