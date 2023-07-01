import React, { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import MinimalLayout from 'layout/MinimalLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="about-us" element={<Landing />} />
        <Route path="services" element={<Landing />} />
      </Route>
      <Route element={<MinimalLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
