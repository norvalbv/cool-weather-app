import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '..';

describe('<NotFound />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
