import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import Toggle, { ToggleProps } from '..';

const ToggleWithAllProps: FC<Required<ToggleProps>> = Toggle;

describe('<Toggle />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<Toggle isChecked />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with all props', () => {
    const tree = renderer
      .create(
        <ToggleWithAllProps
          labelLeft="Test Label Left"
          labelRight="Test Label Right"
          onclick={jest.fn()}
          isChecked
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
