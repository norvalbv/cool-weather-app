import React from 'react';
import renderer from 'react-test-renderer';

import AlertBanner from '..';

const alertBannerMockData = {
  sender_name: 'Test Name',
  event: 'Big Snow Storm!',
  start: 123912390,
  end: 12312310239,
  description: 'Uh Oh',
  tags: ['No Tag'],
};

describe('<AlertBanner />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer
      .create(<AlertBanner alerts={[alertBannerMockData, alertBannerMockData]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
