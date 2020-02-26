import React from 'react';
import { render } from '@testing-library/react';
import HightlightKeywords from '..';

describe('HighlightKeywords', () => {
  test('can render', () => {
    const { container } = render(<HightlightKeywords words="正常使用" />);
    expect(container).toMatchSnapshot();
  });

  test('className', () => {
    const { container } = render(<HightlightKeywords className="cbsama" words="换个类名" />);
    expect(container).toMatchSnapshot();
  });

  test('keywords', () => {
    // const { cantainer } = render(
    //   <HightlightKeywords words="这是一个关键词" keywords={['关键词', '这是']} />,
    // );
  });
});
