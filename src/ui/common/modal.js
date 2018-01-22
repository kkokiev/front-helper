import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Button from './button';

const StyledModal = styled.div`
  display: ${props => props.isOpened ? 'block' : 'none'};
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  overflow-y: auto;
  background: rgba(0,0,0, .3);
`;

const StyledModalWrap = styled.div`
  max-width: 500px;
  margin: 2rem auto;
`;

const StyledModalContent = styled.div`
  background: #fff;
  border: 1px solid #000;
  border-radius: 3px;
`;

const StyledModalBody = styled.div`
  padding: 10px;
  max-height: 400px;
  overflow-y: auto;
`;

const StyledModalFooter = styled.div`
  padding: 10px;
  border-top: 1px solid #000;
  text-align: right;
`;

const FlexModal = ({ children, handleClose, isOpened }) =>
  <StyledModal isOpened={isOpened}>
    <StyledModalWrap>
      <StyledModalContent>
        <StyledModalBody>
          {children}
        </StyledModalBody>
        <StyledModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </StyledModalFooter>
      </StyledModalContent>
    </StyledModalWrap>
  </StyledModal>;

FlexModal.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default FlexModal;
