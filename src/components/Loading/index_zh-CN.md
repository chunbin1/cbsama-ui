<!-- ---
name: Loading
edit: false
sidebar: true
route: /Loading
--- -->


# Loading

一个生动的 Loading 组件

## 代码演示

### 基本使用

```jsx
import React from 'react';
import Loading from '.';

const DemoLoading = () => {
  return <Loading loading />;
};

export default DemoLoading;
```

### 自定义 sytle
配合styled-components使用

<code src="./demo/demo1.tsx" />


```jsx
import React from 'react';
import Loading from '.';
import styled from 'styled-components'

const MyLoading = styled(Loading)`
  .dot {
    height: 1em;
    width: 1em;
  }
`;

export default () => <MyLoading loading />
```

或者直接通过className修改

```jsx
import React from 'react';
import Loading from '.';
import './demo/index.less';

export default () => <Loading loading className="demo_css" />

// index.less
// .demo_css {
//   .dot {
//     height: 1em;
//     width: 1em;
//   }
// }
```


## API

| 参数    | 说明              | 类型    |
| ------- | ----------------- | ------- |
| loading | 控制 loading 状态 | boolean |
| className | 自定义组件样式 | string |
