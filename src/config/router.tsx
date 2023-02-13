import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from 'pages/Root';
import NotFound from 'pages/NotFound';
import Posts from 'pages/Posts';
import Post from 'pages/Posts/Post';
import Qwert from 'pages/Qwert';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFound />}>
      {/* add new routes here */}
      <Route path='posts' element={<Posts />} />
      <Route path='posts/:id' element={<Post />} />
      <Route path='qwert' element={<Qwert />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>
  )
);
