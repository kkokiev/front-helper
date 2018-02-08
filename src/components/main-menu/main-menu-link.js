import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  color: #fff;
  text-decoration: none;
  background: transparent;

  &:hover {
    background: #0f0f0f;
  }

  &.active {
    background: #303030;

    &:hover {
      background: #505050;
    }
  }
`;

const MenuLink = ({ activeClassName, name, path }) =>
  <StyledLink to={path} activeClassName={activeClassName}>{name}</StyledLink>;

MenuLink.propTypes = {
  activeClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default MenuLink;
