import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainMenu from '../main-menu/main-menu';

const ShellWrap = styled.div`
  position: relative;
  min-height: 100vh;
  padding-left: 46px;
`;

const Shell = ({ children }) =>
  <ShellWrap>
    <MainMenu />
    {children}
  </ShellWrap>;

Shell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Shell;
