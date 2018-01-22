import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose, withHandlers, mapProps } from 'recompose';
import { camelCase } from 'lodash';

import {
  changeFlexContainerStyles
} from '../../../modules/flex-container/flex-container-actions';

import {
  FlexBtnPanel,
  FlexBtnPanelTitle,
  FlexBtnPanelSubtitle,
  FlexBtnPanelInfo,
  FlexBtnWrap
} from './flexbox-btn-panel-styled';
import Button from '../../../ui/common/button';

/*
передавать пропс интересующее свойство,
значение этого свойства сравнивать с btn и давать active подходящей кнопке
*/
const mapStateToProps = state => ({
  flexContainer: state.flexContainerReducer,
});

const mapDispatchToProps = {
  changeFlexContainerStyles
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(props => ({
    ...props,
    activeStyle: props.flexContainer[camelCase(props.subtitle)]
  })),
  withHandlers({
    changeFlexStyle: ({ subtitle, changeFlexContainerStyles }) => (e) => {
      const { value } = e.target;
      changeFlexContainerStyles(subtitle, value);
    }
  })
);

const FlexboxBtnPanel = ({ changeFlexStyle, activeStyle, title, subtitle, info, buttons }) =>
  <FlexBtnPanel>
    <FlexBtnPanelTitle>
      {title}
      {' / '}
      <FlexBtnPanelSubtitle>{subtitle}</FlexBtnPanelSubtitle>
    </FlexBtnPanelTitle>
    <FlexBtnPanelInfo>{info}</FlexBtnPanelInfo>
    <FlexBtnWrap>
      {buttons.map(btn =>
        <Button
          key={btn}
          onClick={changeFlexStyle}
          value={btn}
          isActive={activeStyle === btn}
        >
          {btn}
        </Button>
      )}
    </FlexBtnWrap>
  </FlexBtnPanel>;

FlexboxBtnPanel.propTypes = {
  activeStyle: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  changeFlexStyle: PropTypes.object.isRequired,
  info: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default enhance(FlexboxBtnPanel);
