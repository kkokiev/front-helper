import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import { Menu, MenuBtnWrap, MenuBtn } from './main-menu-styled';

const enhance = compose(
  withState('state', 'setState', { isOpened: false }),
  withHandlers({
    toggleMenu: ({ setState }) => () => setState(state => ({ isOpened: !state.isOpened }))
  })
);

const MainMenu = ({ state: { isOpened }, toggleMenu }) =>
  <Menu isOpened={isOpened}>
    <MenuBtnWrap>
      <MenuBtn onClick={toggleMenu} isOpened={isOpened}>
        <span />
        <span />
        <span />
      </MenuBtn>
    </MenuBtnWrap>
  </Menu>;

MainMenu.propTypes = {
  state: PropTypes.shape({
    isOpened: PropTypes.bool.isRequired
  }),
  toggleMenu: PropTypes.func.isRequired
};

export default enhance(MainMenu);
