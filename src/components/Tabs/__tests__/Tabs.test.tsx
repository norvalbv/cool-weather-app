import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import Tabs, { TabsProps } from '..';

const TabsWithAllProps: FC<Required<TabsProps>> = Tabs;

describe('<Tabs />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Tabs data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with all props', () => {
    const tree = renderer
      .create(
        <TabsWithAllProps
          className="bg-red-500"
          data={[
            {
              id: 'current-weather',
              title: 'Current Weather',
              active: true,
              onClick: jest.fn(),
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
