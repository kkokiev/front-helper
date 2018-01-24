import React from 'react';
import PropTypes from 'prop-types';

import { compose, withState, withHandlers } from 'recompose';

import PageTitle from '../../ui/common/page-title';
import FlexPageBody from '../../ui/layout/flex-page-body';
import { FullHeightWrap, FullHeightContent } from '../../ui/layout/full-height-layout';
import { Col50 } from '../../ui/layout/col';
import MarkdownInput from './parts/markdown-input';
import MarkdownOutput from './parts/markdown-output';

import markdownData from '../../helpers/markdown-data';

const enhance = compose(
  withState('state', 'setState', { code: markdownData }),
  withHandlers({
    onChange: ({ setState }) => (e) => {
      const code = e.target.value;
      setState({ code });
    }
  })
);

const MarkdownEditor = ({ state: { code }, onChange }) => (
  <FullHeightWrap>
    <PageTitle>
      <h1>Markdown editor</h1>
    </PageTitle>

    <FullHeightContent>
      <FlexPageBody>
        <Col50>
          <MarkdownInput value={code} onChange={onChange} />
        </Col50>
        <Col50>
          <MarkdownOutput source={code} />
        </Col50>
      </FlexPageBody>
    </FullHeightContent>
  </FullHeightWrap>
);

MarkdownEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    code: PropTypes.string.isRequired,
  })
};

export default enhance(MarkdownEditor);
