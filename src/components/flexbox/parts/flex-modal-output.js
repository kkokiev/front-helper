import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { compose, withHandlers } from 'recompose';

const enhance = compose(
  withHandlers({
    handleFocus: () => (e) => {
      e.target.select();
    }
  })
);

const StyledTextarea = styled.textarea`
  height: 200px;
  width: 100%;
  border: none;
  resize: none;
  outline: none;
`;

const FlexModalOutput = ({
  data: {
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent
  },
  handleFocus
}) =>
  <div>
    <StyledTextarea
      onClick={handleFocus}
      readOnly
      value={
`.container {
  display: flex;
  flex-direction: ${flexDirection};
  flex-wrap: ${flexWrap};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
}

.item {
  flex-shrink: 0;
  margin: 5px;
}`
      }
    />
  </div>;

FlexModalOutput.propTypes = {
  data: PropTypes.shape({
    flexDirection: PropTypes.string.isRequired,
    flexWrap: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
    alignContent: PropTypes.string.isRequired
  }),
  handleFocus: PropTypes.func
};

export default enhance(FlexModalOutput);
