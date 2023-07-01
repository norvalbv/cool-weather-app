import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
