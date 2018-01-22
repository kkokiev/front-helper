import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlexOutputContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexStyles.flexDirection};
  flex-wrap: ${props => props.flexStyles.flexWrap};
  justify-content: ${props => props.flexStyles.justifyContent};
  align-items: ${props => props.flexStyles.alignItems};
  align-content: ${props => props.flexStyles.alignContent};
  width: 100%;
  min-height: 300px;
  border: 1px solid #ccc;
  background: #f6f6f6;
  overflow-x: scroll;
`;

const FlexOutputContainer = ({ children, flexStyles }) =>
  <StyledFlexOutputContainer flexStyles={flexStyles}>
    {children}
  </StyledFlexOutputContainer>;

FlexOutputContainer.propTypes = {
  children: PropTypes.node,
  flexStyles: PropTypes.shape({
    flexWrap: PropTypes.string.isRequired,
    flexDirection: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
    alignContent: PropTypes.string.isRequired,
  })
};

export default FlexOutputContainer;
