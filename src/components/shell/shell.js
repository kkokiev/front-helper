import React from 'react';
import styled from 'styled-components';

import MainMenu from '../main-menu/main-menu';

const ShellWrap = styled.div`
  position: relative;
  min-height: 100vh;
  padding-left: 46px;
`;

const Shell = () =>
  <ShellWrap>
    <MainMenu />
  </ShellWrap>;

export default Shell;
