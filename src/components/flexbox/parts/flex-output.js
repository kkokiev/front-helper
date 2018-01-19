import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import {
  FlexOutputRow,
  FlexOutputTitle,
  FlexOutputContainer,
  FlexOutputItem,
  FlexOutputAddItemBtn
} from './flex-output-styled';
import Button from '../../../ui/common/button';

import {
  addFlexItem,
  addRandomItemHeight,
  removeRandomItemHeight,
  addRandomItemWidth,
  removeRandomItemWidth
} from '../../../modules/flex-items/flex-items-actions';

const mapStateToProps = state => ({
  items: state.flexItemsReducer
});

const mapDispatchToProps = {
  addFlexItem,
  addRandomItemHeight,
  removeRandomItemHeight,
  addRandomItemWidth,
  removeRandomItemWidth
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('state', 'setState', { randomHeight: false, randomWidth: false, showCSS: false }),
  withHandlers({
    addFlexItem: ({ state, addFlexItem, addRandomItemHeight, addRandomItemWidth }) => () => {
      addFlexItem();
      if (state.randomHeight) {
        addRandomItemHeight();
      }
      if (state.randomWidth) {
        addRandomItemWidth();
      }
    },
    toggleRandomHeight: ({
      setState,
      state,
      addRandomItemHeight,
      removeRandomItemHeight
    }) => () => {
      if (state.randomHeight) {
        removeRandomItemHeight();
      } else {
        addRandomItemHeight();
      }
      setState({ ...state, randomHeight: !state.randomHeight });
    },
    toggleRandomWidth: ({ setState, state, addRandomItemWidth, removeRandomItemWidth }) => () => {
      if (state.randomWidth) {
        removeRandomItemWidth();
      } else {
        addRandomItemWidth();
      }
      setState({ ...state, randomWidth: !state.randomWidth });
    },
    toggleCSSModal: ({ setState }) => () => setState(state =>
      ({ ...state, showCSS: !state.showCSS })
    )
  })
);

const FlexOutput = ({
  state: { randomHeight, randomWidth, showCSS },
  items,
  addFlexItem,
  toggleRandomHeight,
  toggleRandomWidth,
  toggleCSSModal
}) =>
  <div>
    <FlexOutputRow>
      <Button onClick={toggleRandomHeight} isActive={randomHeight}>Random height</Button>
      <Button onClick={toggleRandomWidth} isActive={randomWidth}>Random width</Button>
      <Button onClick={toggleCSSModal} isActive={showCSS}>Get css</Button>
    </FlexOutputRow>

    <FlexOutputRow>
      <FlexOutputTitle>
        <h2>Preview</h2>
      </FlexOutputTitle>
    </FlexOutputRow>

    <FlexOutputRow>
      <FlexOutputContainer>
        <FlexOutputAddItemBtn onClick={addFlexItem}>Add</FlexOutputAddItemBtn>
        {items.map(item =>
          <FlexOutputItem key={item.id} height={item.height} width={item.width}>
            .item
          </FlexOutputItem>
        )}
      </FlexOutputContainer>
    </FlexOutputRow>
    <div>item rule flex-shrink: 0</div>
  </div>;

FlexOutput.propTypes = {
  addFlexItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  state: PropTypes.shape({
    randomHeight: PropTypes.bool.isRequired,
    randomWidth: PropTypes.bool.isRequired,
    showCSS: PropTypes.bool.isRequired
  }),
  toggleCSSModal: PropTypes.func.isRequired,
  toggleRandomHeight: PropTypes.func.isRequired,
  toggleRandomWidth: PropTypes.func.isRequired
};

export default enhance(FlexOutput);
