import React from 'react';
import renderer from 'react-test-renderer';

import TermsAndConditions from '..';

describe('<TermsAndConditions />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<TermsAndConditions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
