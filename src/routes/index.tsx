import React, { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import MinimalLayout from 'layout/MinimalLayout';
import PrivacyPolicy from 'pages/Legal/PrivacyPolicy';
import TermsAndConditions from 'pages/Legal/TermsAndConditions';
import AboutUs from 'pages/AboutUs';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Landing />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
      <Route element={<MinimalLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
