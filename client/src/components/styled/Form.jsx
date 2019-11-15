import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 5vh 2vw;
  width: 40%;
  margin: 0 auto 20vh auto;
  /* height: 400px; */
  h1 {
    font-size: 2em;
    margin: 0 0 12px 0;
  }
  p {
    font-size: 1.6em;
    color: white;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    margin: 0 auto;
    p {
      padding: 6px 0;
      font-size: 1.4em;
    }
    input {
      width: 250px;
      padding: 6px;
      border: none;
      background-color: none;
    }
  }
  .SubmitButton {
    padding: 8px 0;
    margin: 12px 0;
    background: white;
    color: black;
    width: 250px;
  }
`;

export default StyledForm;
