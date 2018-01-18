import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  left: ${props => props.isOpened ? '0px' : '-154px'};
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 200px;
  padding: 5px;
  background: #000;
  color: #fff;
  transition: .35s ease-in-out;
`;

export const MenuBtnWrap = styled.div`
  text-align: right;
`;

export const MenuBtn = styled.button`
  position: relative;
  display: inline-block;
  height: 26px;
  width: 36px;
  padding: 5px;
  border: none;
  background: #000;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  overflow: hidden;
  outline: none;

  &:hover {
    opacity: .8;
  }

  > span {
    position: absolute;
    left: 5px;
    right: 5px
    display: block;
    height: 2px;
    width: 26px;
    background: #fff;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: ${props => props.isOpened ? '11px' : '5px'};
      transform: ${props => props.isOpened ? 'rotate(135deg)' : 'rotate(0deg)'};
    }

    &:nth-child(2) {
      top: 11px;
      opacity: ${props => props.isOpened ? 0 : 1};
      left: ${props => props.isOpened ? '-36px' : '5px'};
    }

    &:last-child {
      top: ${props => props.isOpened ? '11px' : '17px'};
      transform: ${props => props.isOpened ? 'rotate(-135deg)' : 'rotate(0deg)'};
    }
  }
`;
