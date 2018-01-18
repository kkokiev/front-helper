import styled from 'styled-components';

export const FlexBtnPanel = styled.div`
  margin-bottom: 2rem;
  padding: .8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FlexBtnPanelTitle = styled.h2`
  font-size: 2rem;
`;

export const FlexBtnPanelSubtitle = styled.span`
  font-size: 1.6rem;
  color: #999;
`;

export const FlexBtnPanelInfo = styled.p`
  margin-bottom: .8rem;
  font-size: 1.6rem;
  color: #999;
`;

export const FlexBtnWrap = styled.div`
  padding-top: .8rem;
  border-top: 1px solid #ccc;
`;

export const FlexBtn = styled.button`
  padding: .375rem .75rem;
  font-size: 1.6rem;
  background: #fff;
  border: 1px solid #000;
  border-right: none;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid #000;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
