import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

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
