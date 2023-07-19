import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeContextProvider } from 'context/theme';

import Loader from '..';

describe('<Loader />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer
      .create(
        <ThemeContextProvider>
          <Loader />
        </ThemeContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
