---
name: HightlightKeywords
edit: false
sidebar: true
route: /HightlightKeywords
---
import { Demo1,Demo2 } from "./demo/demo1"

# HighlightKeywords

高亮keywords的组件

## 代码演示

### 基本使用

<Demo1/>

```
const Demo1 = () => <HightlightKeywords keywords={['关键词']} words="这是一个关键词组件" />;
```

### 自定义style

<Demo2/>

```
const YellowHightLight = styled(HightlightKeywords)`
  .highlight {
    background-color: yellow;
  }
`;
const Demo2 = () => <YellowHightLight keywords={['关键词']} words="这是一个关键词组件" />;
```

## API

| 参数    | 说明              | 类型    |
| ------- | ----------------- | ------- |
| words | 文字 | string |
| keywords | 关键词数组，用以高亮 | string[] |
| className | 自定义组件样式 | string |



