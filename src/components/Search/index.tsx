import React, { ReactElement, SyntheticEvent, useState } from 'react';

export type SearchValue = {
  lon: number | null;
  lat: number | null;
};

type SearchProps = {
  setLatLon: React.Dispatch<SearchValue>;
};

const Search = ({ setLatLon }: SearchProps): ReactElement => {
  const [values, setValues] = useState<SearchValue>({ lat: 0, lon: 0 });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setQueryByKey = (key: keyof typeof values, value: number): void => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();

    if (Object.values(values).some((v) => !v)) {
      return setErrorMessage('Must fill out both latitude and longitude');
    }

    if (Object.values(values).some((v) => !v || v <= -100 || v >= 100)) {
      return setErrorMessage('Latitude and Longitude must be between -100 and 100');
    }

    setErrorMessage(null);
    setValues({ lat: 0, lon: 0 });
    return setLatLon(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="number"
            id="search-navbar"
            className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500"
            placeholder="Latitude"
            onChange={(e): void => setQueryByKey('lat', Number(e.target.value))}
          />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="number"
            id="search-navbar"
            className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-violet-500 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500"
            placeholder="Longitude"
            onChange={(e): void => setQueryByKey('lon', Number(e.target.value))}
          />
        </div>
        <button
          type="submit"
          className="w-24 rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm uppercase text-gray-900 hover:font-semibold focus:border-violet-500 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500"
        >
          Search
        </button>
      </div>
      <p className="mt-2 text-xs capitalize text-red-600 dark:text-red-400">{errorMessage}</p>
    </form>
  );
};

export default Search;
