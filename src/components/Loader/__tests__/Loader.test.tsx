import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '..';

describe('<Loader />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
