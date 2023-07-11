import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'utils/classNames';

const NavBar = (): ReactElement => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-primary shadow">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-4">
        <Link to="/">
          <span className="whitespace-nowrap text-xl font-thin dark:text-white">
            Benji&apos;s Weather App.
          </span>
        </Link>
        <div className="flex items-center justify-between" id="navbar-search">
          <ul className="mt-0 flex rounded-lg border-gray-100 p-0 font-medium dark:border-gray-700 dark:bg-gray-800">
            <li>
              <Link
                to="/"
                className={classNames(
                  'block rounded py-2 pl-3 pr-4',
                  pathname === '/'
                    ? 'text-violet-700 dark:text-violet-500'
                    : 'text-gray-900 dark:text-white'
                )}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                className={classNames(
                  'block rounded py-2 pl-3 pr-4',
                  pathname === '/about-us'
                    ? 'text-violet-700 dark:text-violet-500'
                    : 'text-gray-900 dark:text-white'
                )}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
