import { createApi /* , fetchBaseQuery */ } from '@reduxjs/toolkit/query/react';

import { kyBaseQuery } from 'config/ky';
import { IPost } from 'interfaces/post';

export const posts = createApi({
  reducerPath: 'posts',
  tagTypes: ['Post'],
  baseQuery: kyBaseQuery({ baseUrl: 'posts' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (limit = 0) => ({
        url: `${limit > 0 && `?_limit=${limit}`}`,
        method: 'get', // not necessary
      }),
      providesTags: ['Post'],
    }),
    getPost: builder.query<IPost, string | undefined>({
      query: (id) => ({
        url: `/${id}`,
        method: 'get',
      }),
      providesTags: ['Post'],
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<void, IPost>({
      query: ({ id, ...rest }) => ({
        url: `/${id}`,
        method: 'put',
        params: {
          json: rest,
        },
      }),
      invalidatesTags: ['Post'],
    }),
    addPost: builder.mutation<void, IPost>({
      query: (post) => ({
        method: 'post',
        params: {
          json: post,
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation, useUpdatePostMutation, useAddPostMutation } = posts;
