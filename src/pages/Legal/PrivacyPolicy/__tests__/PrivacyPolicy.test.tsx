import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyPolicy from '..';

describe('<PrivacyPolicy />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<PrivacyPolicy />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
