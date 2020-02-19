import React from 'react';
import styled from 'styled-components';
import Loading from '..';
import './index.less';

const MyLoading = styled(Loading)`
  .dot {
    height: 1em;
    width: 1em;
  }
`;

const Demo2 = () => <MyLoading loading />;

export const DemoCss = () => <Loading loading className="demo_css" />;

export default Demo2;
