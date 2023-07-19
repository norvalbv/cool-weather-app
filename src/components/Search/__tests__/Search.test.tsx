import React from 'react';
import renderer from 'react-test-renderer';

import Search from '..';

describe('<Search />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Search setLatLon={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
