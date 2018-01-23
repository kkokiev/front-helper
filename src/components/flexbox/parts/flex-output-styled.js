import styled from 'styled-components';

export const FlexOutputRow = styled.div`
  margin-bottom: 2rem;
`;

export const FlexOutputTitle = styled.div`
  background: #000;
  color: #fff;
  padding: 5px 10px;

  > h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const FlexOutputItem = styled.div`
  flex-shrink: 0;
  min-height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  margin: 5px;
  background: #ccc;
  text-align: center;
  line-height: ${props => `${props.height}px`};
`;

export const FlexOutputAddItemBtn = styled.button`
  flex-shrink: 0;
  display: block;
  height: 50px;
  width: 80px;
  margin: 5px;
  cursor: pointer;
  border: 1px dashed #ccc;
  background: none;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: .2s ease-in-out;

  &:hover,
  &:focus {
    background: #ccc;
    border-color: #000;
  }
`;
