import React from 'react';
import PropTypes from 'prop-types';

import {
  FlexBtnPanel,
  FlexBtnPanelTitle,
  FlexBtnPanelSubtitle,
  FlexBtnPanelInfo,
  FlexBtnWrap,
  FlexBtn
} from './flexbox-btn-panel-styled';

const FlexboxBtnPanel = ({ title, subtitle, info, buttons }) =>
  <FlexBtnPanel>
    <FlexBtnPanelTitle>
      {title}
      {' / '}
      <FlexBtnPanelSubtitle>{subtitle}</FlexBtnPanelSubtitle>
    </FlexBtnPanelTitle>
    <FlexBtnPanelInfo>{info}</FlexBtnPanelInfo>
    <FlexBtnWrap>
      {buttons.map(btn =>
        <FlexBtn key={btn}>{btn}</FlexBtn>
      )}
    </FlexBtnWrap>
  </FlexBtnPanel>;

FlexboxBtnPanel.propTypes = {
  buttons: PropTypes.array.isRequired,
  info: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FlexboxBtnPanel;
