import React from 'react';
import renderer from 'react-test-renderer';
import { weatherMockData } from '__mocks__/currentWeatherMockData';
import * as weather from 'services';

import Landing from '..';

describe('<Landing />', () => {
  beforeEach(() => {
    jest.spyOn(weather, 'useWeather').mockImplementation(
      (): weather.WeatherReturnType => ({
        data: weatherMockData,
        isLoading: false,
        isValidating: false,
        error: undefined,
      })
    );
  });

  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Landing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
