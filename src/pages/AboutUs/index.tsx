import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';

const AboutUs = (): ReactElement => {
  return (
    <CardWrapper>
      <div className="mt-10 text-center dark:text-white">
        <h1 className="mb-10 text-3xl text-violet-700 underline underline-offset-8">
          About This Project
        </h1>
        <p className="">Project was built as part of a demo Weather App. </p>
        <h2 className="my-6 text-2xl text-violet-700 underline underline-offset-8">Built with:</h2>
        <ol>
          <li>
            <span className="font-semibold text-violet-500">React</span> - for UI
          </li>
          <li>
            <span className="font-semibold text-violet-500">Jest</span> - for snapshot and unit
            tests
          </li>
          <li>
            <span className="font-semibold text-violet-500">react-router-dom</span> - for route
            navigation
          </li>
          <li>
            <span className="font-semibold text-violet-500">swr</span> - for caching data fetched
            from API
          </li>
          <li>
            <span className="font-semibold text-violet-500">axios</span> - for http requests
          </li>
          <li>
            <span className="font-semibold text-violet-500">vite</span> - for front end tooling
          </li>
          <li>
            <span className="font-semibold text-violet-500">tailwindcss</span> - for styling
          </li>
        </ol>
        <p className="mt-10 font-semibold uppercase">
          View Code&nbsp;
          <a
            className="underline"
            href="https://www.github.com/norvalbv/cool-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
    </CardWrapper>
  );
};

export default AboutUs;
