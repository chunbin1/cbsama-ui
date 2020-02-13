import React from 'react';
import { render } from '@testing-library/react';
import Loading from '..';

describe('Loading', () => {
  test('no loading', () => {
    const { container } = render(<Loading loading={false} />);
    expect(container).toMatchSnapshot();
  });

  test('loading', () => {
    const { container } = render(<Loading loading />);
    expect(container).toMatchSnapshot();
  });
});
