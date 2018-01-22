import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: .375rem .75rem;
  font-size: 1.6rem;
  background: ${props => props.isActive ? '#6c757d' : '#fff'};
  border: 1px solid #000;
  border-right: none;
  color: ${props => props.isActive ? '#fff' : 'inherit'};
  cursor: pointer;
  transition: .2s ease-in-out;
  outline: none;

  &:hover,
  &:focus {
    background: ${props => props.isActive ? '#5a6268' : '#f0f0f0'};
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid #000;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Button = ({ children, isActive, onClick, value }) =>
  <StyledButton isActive={isActive} onClick={onClick} value={value}>
    {children}
  </StyledButton>;

Button.propTypes = {
  children: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Button;
