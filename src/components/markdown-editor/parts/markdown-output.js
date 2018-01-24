import React from 'react';
import PropTypes from 'prop-types';

import Markdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdown = styled(Markdown)`
  height: 100%;
  padding: .5rem;
  background: #fafafa;
`;

const MarkdownOutput = ({ source }) =>
  <StyledMarkdown source={source} />;

MarkdownOutput.propTypes = {
  source: PropTypes.string.isRequired
};

export default MarkdownOutput;
