import React, { ReactElement, useState } from 'react';
import { useWeather } from 'services';
import Loader from 'components/Loader';
import WeatherCard from 'components/WeatherCard';
import Tabs, { TabsKey } from 'components/Tabs';
import Search, { SearchValue } from 'components/Search';

const Landing = (): ReactElement => {
  const [latLon, setLatLon] = useState<SearchValue>({ lat: 25, lon: 25 });
  const { data, isLoading } = useWeather(latLon);

  const [activeTab, setActiveTab] = useState<TabsKey>('current-weather');

  /**
   * No data is a failsafe. isLoading will only be false if there is data but Typescript doesn't know this,
   *
   * So instead of remove the error with TS IGNORE, Just do the !data in the if.
   */
  if (isLoading || !data) return <Loader />;

  return (
    <div className="relative mx-auto max-w-4xl">
      <Tabs
        className="mb-2 mt-10 flex w-full items-center justify-center"
        data={[
          {
            id: 'current-weather',
            title: 'Current Weather',
            active: activeTab === 'current-weather',
            onClick(): void {
              setActiveTab('current-weather');
            },
          },
          {
            id: 'forecast',
            title: '7 Day Forecast',
            active: activeTab === 'forecast',
            onClick(): void {
              setActiveTab('forecast');
            },
          },
        ]}
      />
      <div className="my-4 flex flex-col items-center gap-4 md:items-start">
        <h2 className="dark:text-white">Search for new location</h2>
        <Search setLatLon={setLatLon} />
      </div>
      <WeatherCard data={data} weather={activeTab} />
    </div>
  );
};

export default Landing;
