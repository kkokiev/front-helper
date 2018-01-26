import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../../ui/common/header';
import Notification from '../../ui/common/notification';

const ShellWrap = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 4.6rem;
`;

const Shell = ({ children }) =>
  <ShellWrap>
    <Header />
    {children}
    <Notification />
  </ShellWrap>;

Shell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Shell;
