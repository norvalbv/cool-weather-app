import React, { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from 'layout';
import Landing from 'pages/Landing';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Landing />} />
        {/* <Route path="*" element={<NotFound />}  /> */}
      </Route>
    </Route>
  )
);
