<!-- ---
name: HightlightKeywords
edit: false
sidebar: true
route: /HightlightKeywords
--- -->

# HighlightKeywords

高亮keywords的组件

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx" />

### 自定义style

```jsx
import React from 'react';
import styled from 'styled-components'
import { HighlightKeywords } from 'cbsama-ui';

const YellowHightLight = styled(HighlightKeywords)`
  .highlight {
    background-color: yellow;
  }
`;

export default () => <YellowHightLight keywords={['关键词']} words="这是一个关键词组件" />;

```
也可通过className修改样式

## API

| 参数    | 说明              | 类型    |
| ------- | ----------------- | ------- |
| words | 文字 | string |
| keywords | 关键词数组，用以高亮 | string[] |
| className | 自定义组件样式 | string |



