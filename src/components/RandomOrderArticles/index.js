import React, { Component } from "react";
import styled from "styled-components";

const Word = styled.span`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

function upsetArr(arr) {
  return arr.sort(function() {
    return Math.random() - 0.5;
  });
}

function getPosition(articlesWithIdx, width, wordWidth) {
  const height = wordWidth + 7;
  const count = Math.floor(width / wordWidth);
  const ret = articlesWithIdx.map(wordObj => {
    const { word, idx } = wordObj;
    return {
      left: Math.floor(idx % count) * wordWidth,
      top: Math.floor(idx / count) * height,
      word
    };
  });
  return ret;
}

class RandomOrderArticles extends Component {
  render() {
    const { articles = "", width = 800, wordWidth = 14 } = this.props;
    const articlesWithIdx = Array.prototype.map.call(articles, (word, idx) => ({
      word,
      idx
    }));
    const randomArticles = upsetArr(articlesWithIdx);
    const randomArticlesWithPosition = getPosition(
      randomArticles,
      width,
      wordWidth
    );
    console.log(randomArticlesWithPosition);
    return (
      <div>
        {randomArticlesWithPosition.length !== 0 &&
          randomArticlesWithPosition.map(wordObj => {
            const { word, ...restProps } = wordObj;
            return <Word {...restProps}>{word}</Word>;
          })}
      </div>
    );
  }
}

export default RandomOrderArticles;
