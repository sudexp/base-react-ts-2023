import ky from 'ky';

import type { BaseQueryFn } from '@reduxjs/toolkit/query';

interface IResponse {
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}
interface IError {
  name: string;
  message: string;
  response: IResponse;
}

export const api = ky.create({
  prefixUrl: 'http://localhost:3001/',
});
// usage: const data = await api('posts').json();

// secureApi not currently in use, as an example
export const secureApi = api.extend({
  // some options to extend
  headers: {
    Authorization: 'token',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('X-Requested-With', 'ky');
      },
    ],
  },
});

export const kyBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
  {
    url?: string;
    method?: 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';
    params?: object;
  },
  unknown,
  unknown
> => {
  return async ({ url = '', method = 'get', params }) => {
    try {
      const result = await api[method](baseUrl + url, params);

      return {
        data: result.json(),
      };
    } catch (error) {
      const err = error as IError;

      return {
        error: {
          name: err.name,
          message: err.message,
          ok: err.response?.ok,
          redirected: err.response?.redirected,
          status: err.response?.status,
          statusText: err.response?.statusText,
          type: err.response?.type,
          url: err.response?.url,
        },
      };
    }
  };
};

// ky POST example create new instance
export const addPost = async () => {
  const newPost = { id: '20', title: 'Test post', body: 'Est itaque suscipit modi porro.' };

  try {
    const posts = await api.post('posts', { json: newPost }).json();
    // eslint-disable-next-line no-console
    console.log(posts);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err /* .message */);
  }
};
