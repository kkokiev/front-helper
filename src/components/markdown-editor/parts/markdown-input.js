import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: .5rem;
  resize: none;
  outline: none;
  border: 1px solid #ccc;
`;

const MarkdownInput = ({ value, onChange }) =>
  <StyledTextarea value={value} onChange={onChange} />;

MarkdownInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default MarkdownInput;
