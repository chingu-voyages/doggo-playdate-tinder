import styled from 'styled-components';

const Container = styled.div`
  background: lightgrey;
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: ${props => props.theme.linkText};
    margin-bottom: 2vh;
  }
`;

const StyledRegisterPage = {
  Container
};

export default StyledRegisterPage;
