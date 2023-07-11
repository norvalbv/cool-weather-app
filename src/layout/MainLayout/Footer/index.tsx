import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Footer = (): ReactElement => {
  return (
    <footer className="m-4 w-full max-w-[calc(100vw-2rem)] rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-thin dark:text-white">
              Weather App.
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="mr-4 hover:underline md:mr-6 ">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023&nbsp; Benji&apos;s Weather App™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
