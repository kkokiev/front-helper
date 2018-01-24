import React from 'react';
import styled from 'styled-components';

import MainMenu from '../../components/main-menu/main-menu';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: #000;
  color: #fff;
`;

const StyledHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled.a`
  color: #fff;
`;

const Header = () =>
  <StyledHeader>
    <StyledHeaderWrap>
      <div>
        <MainMenu />
      </div>
      <div>
        <HeaderLink
          href="https://github.com/kkokiev/front-helper"
        >
          Source code on GitHub
        </HeaderLink>
      </div>
    </StyledHeaderWrap>
  </StyledHeader>;

export default Header;
