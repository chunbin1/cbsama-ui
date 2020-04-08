import React, { SFC } from 'react';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';

const colors = ['#7ef9ff', '#89cff0', '#4682b4', '#0f52ba', '#000080'];

const wave = keyframes`
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  display: none;
  &.show {
    display: flex;
  }
  animation-delay: 1s;
  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: ${wave} 2s ease-out infinite;
    }
    ${colors.map(
      (color, index) => `
        &:nth-child(${index + 1}){
          background: ${color};
          &::before {
            animation-delay: ${(index + 1) * 0.2}s;
          }
        }
        `,
    )}
  }
`;

interface IProps {
  loading: boolean;
  className?: string;
}

const Loading: SFC<IProps> = ({ loading = false, className }) => (
  <LoadingContainer
    className={classnames(className, {
      show: loading === true,
    })}
  >
    <div className="dot" />
    <div className="dot" />
    <div className="dot" />
    <div className="dot" />
    <div className="dot" />
  </LoadingContainer>
);

export default Loading;
