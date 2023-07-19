import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import HorizontalTable, { HorizontalTableProps } from '..';

const HorizontalTableWithAllProps: FC<Required<HorizontalTableProps>> = HorizontalTable;

describe('<HorizontalTable />', () => {
  test('Should render correctly with mandatory props', () => {
    const tree = renderer.create(<HorizontalTable title="Test Title" value={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with all props', () => {
    const tree = renderer
      .create(
        <HorizontalTableWithAllProps
          title="Test Title"
          value={3}
          valueSymbol="#"
          widths={{
            title: '2/5',
            value: '3/5',
          }}
          requirePadding
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
