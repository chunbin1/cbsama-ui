---
name: Loading
edit: false
sidebar: true
route: /Loading
---

import Demo1 from './demo/demo1'; 
import Demo2,{DemoCss} from './demo/demo2';

# Loading

一个生动的 Loading 组件

## 代码演示

### 基本使用

<Demo1/>

```
const DemoLoading = () => {
  return <Loading loading />;
};
```

### 自定义 sytle
需要配合styled-components使用

<Demo2/>

```
import Loading from '..';

const MyLoading = styled(Loading)`
  .dot {
    height: 1em;
    width: 1em;
  }
`;

const Demo2 = () => <MyLoading loading />;
```

或者直接通过className修改
<DemoCss/>

```
import './index.less';

DemoCss = () => <Loading loading className="demo_css" />

// index.less
.demo_css {
  .dot {
    height: 1em;
    width: 1em;
  }
}
```


## API

| 参数    | 说明              | 类型    |
| ------- | ----------------- | ------- |
| loading | 控制 loading 状态 | boolean |
| className | 自定义组件样式 | string |
