import styled from 'styled-components';

export const FlexHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  border-bottom: .5rem solid #000;
`;

export const FlexBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 2rem 0;
`;

export const FlexInputSide = styled.div`
  width: 40%;
  padding: 0 1rem;
`;

export const FlexOutputSide = styled.div`
  width: 60%;
  padding: 0 1rem;
`;
