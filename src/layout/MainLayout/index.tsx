import React, { ReactElement } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = (): ReactElement => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
