import React, { Component } from "react";
import styled from "styled-components";

const Word = styled.span.attrs(props => ({
  style: {
    left: `${props.left}px`,
    top: `${props.top}px`
  }
}))`
  position: absolute;
`;

const Container = styled.div`
  position: relative;
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
      word,
      key: idx
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
    return (
      <Container className="cb-RandomOrderArticles-container">
        {randomArticlesWithPosition.length !== 0 &&
          randomArticlesWithPosition.map(wordObj => {
            const { word, ...restProps } = wordObj;
            return <Word {...restProps}>{word}</Word>;
          })}
      </Container>
    );
  }
}

export default RandomOrderArticles;
