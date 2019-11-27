import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100%;
  color: ${props => props.theme.white};
  padding: 32px;

  h1,
  h2,
  h3 {
    font-weight: 800;
    color: black;
    text-align: start;
  }

  & h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2.6em;
  }
`;

export default Content;
