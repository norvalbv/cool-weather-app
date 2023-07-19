import React from 'react';
import renderer from 'react-test-renderer';

import AlertBanner from '..';

describe('<AlertBanner />', () => {
  test('should render correctly with no props', () => {
    const tree = renderer.create(<AlertBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
