import React from 'react';
import renderer from 'react-test-renderer';

import AboutUs from '..';

describe('<AboutUs />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<AboutUs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});