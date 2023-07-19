import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import CardWrapper, { CardWrapperProps } from '..';

const CardWrapperWithAllProps: FC<Required<CardWrapperProps>> = CardWrapper;

describe('<CardWrapper />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer
      .create(
        <CardWrapper>
          <div>Child</div>
        </CardWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with all props', () => {
    const tree = renderer
      .create(
        <CardWrapperWithAllProps
          backgroundColor="white"
          cardType="default"
          className="bg-red-500"
          role="button"
        >
          <div>Child</div>
        </CardWrapperWithAllProps>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
