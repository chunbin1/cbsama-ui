import React from 'react';
import styled from 'styled-components';
import HightlightKeywords from '..';

export const Demo1 = () => <HightlightKeywords keywords={['关键词']} words="这是一个关键词组件" />;

const YellowHightLight = styled(HightlightKeywords)`
  .highlight {
    background-color: yellow;
  }
`;
export const Demo2 = () => <YellowHightLight keywords={['关键词']} words="这是一个关键词组件" />;
