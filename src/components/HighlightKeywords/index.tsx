/*
 * @Author: licb
 * @Date: 2020-02-16 14:59:09
 * @Last Modified by: licb
 * @Last Modified time: 2020-02-20 14:58:15
 */
//  这是一个用来显示高亮的组件

import React, { SFC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #3c4655;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  background: rgb(251, 252, 254);
  text-align: left;
  .highlight {
    background-color: rgba(221, 17, 68, 0.2);
    padding: 0.1em;
    border-radius: 0.1em;
  }
`;

const FLAG = '@';

interface IProps {
  keywords?: string[];
  words: string;
  className?: string;
}

const HighlightKeywords: SFC<IProps> = ({ keywords = [], words, className }) => {
  if (keywords.length === 0) {
    return <Container className="tupu-input">{words}</Container>;
  }
  const reg = new RegExp(keywords.join('|'), 'g');
  const token = words.replace(reg, `#${FLAG}$&#`); // $&表示最后匹配的那个
  const elements = token.split('#').map((x, index) =>
    x[0] === FLAG ? (
      <span key={`${index}${x}`} className="highlight">
        {x.slice(1)}
      </span>
    ) : (
      <span key={`${index}${x}`}>{x}</span>
    ),
  );

  return <Container className={className}>{elements}</Container>;
};

export default HighlightKeywords;
