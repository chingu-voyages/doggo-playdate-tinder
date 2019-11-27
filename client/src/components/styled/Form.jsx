import styled from 'styled-components';

const StyledForm = styled.form`
  h1 {
    font-size: 2em;
  }
  & a {
    font-size: 1.6em;
  }
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${props => props.theme.dark};

  label {
    margin: 10px 0;
  }
  input {
    width: 310px;
    padding: 6px 12px;
    border-radius: 2px;
    border: none;
  }
  & div {
    display: flex;
    justify-content: space-between;

    & input {
      width: 150px;
      margin: 0 5px;
    }
  }

  & button {
    width: 200px;

    &.SubmitButton {
      margin: 8px 0;
      padding: 8px 12px;
      border-radius: 20px;
    }
  }
`;

export default StyledForm;
