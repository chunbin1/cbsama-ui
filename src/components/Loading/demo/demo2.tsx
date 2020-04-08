import React from 'react';
import styled from 'styled-components';
import { Loading } from 'cbsama-ui';

const MyLoading = styled(Loading)`
  .dot {
    height: 1em;
    width: 1em;
  }
`;

const Demo2 = () => <MyLoading loading />;

export default Demo2;
