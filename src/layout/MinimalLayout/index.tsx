import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const MinimalLayout = (): ReactElement => {
  return <Outlet />;
};

export default MinimalLayout;
