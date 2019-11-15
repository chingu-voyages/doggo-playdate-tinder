import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100%;
  background: ${props => props.theme.dark};
  color:${props => props.theme.white}

  div {
    width: 100%;
    height:calc(100vh - 60px);
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export default Content;
