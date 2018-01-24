import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';
import { Menu, MenuBtn, MenuList, MenuLink } from './main-menu-styled';
import menuList from '../../helpers/menu-data';

class MainMenu extends Component {
  state = { isOpened: false };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  toggleMenu = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  handleClickOutside = (e) => {
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({ isOpened: false });
    }
  }

  render() {
    const { isOpened } = this.state;
    const { pathname } = this.props.location;

    return (
      <div ref={this.setWrapperRef}>
        <MenuBtn onClick={this.toggleMenu} isOpened={isOpened}>
          <span />
          <span />
          <span />
        </MenuBtn>
        <Menu isOpened={isOpened}>
          <MenuList>
            {menuList.map(item =>
              <li key={item.name}>
                <MenuLink href={item.link} isActive={pathname === item.link}>{item.name}</MenuLink>
              </li>
            )}
          </MenuList>
        </Menu>
      </div>
    );
  }
}

MainMenu.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(MainMenu);
