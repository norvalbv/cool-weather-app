import React from 'react';
import renderer from 'react-test-renderer';

import Landing from '..';

describe('<Landing />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Landing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
