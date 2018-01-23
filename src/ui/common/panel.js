import styled from 'styled-components';

const Panel = styled.div`
  margin-bottom: 2rem;
  padding: .8rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  > h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: .8rem;
    font-size: 1.6rem;
  }

  strong {
    font-weight: bold;
  }

  > ul {
    padding-left: 1rem;
    margin-bottom: .8rem;
    > li {
      margin-bottom: .8rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Panel;
