import styled from 'styled-components';

export const StyledInputWrrap = styled.section`
  display: flex;
  width: 100%;
  /* background-color: red; */
  height: 20vh;
  align-items: flex-end;
  justify-content: center;

  form {
    display: flex;
    width: 30%;
    max-width: 500px;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    width: calc(100% - 30px);
    /* max-width: 400px; */
    padding-left: 10px;
    font-size: 20px;
  }

  input:focus {
    outline: none;
  }

  button {
    display: inline-block;
    position: relative;
    border: 1px solid black;
    width: 60px;
    height: 32px;
    line-height: 30px;
    border-radius: 2px;
    background-color: #fff;
    color: #646464;
    font-size: 13px;
  }

  button:active {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    transition-delay: 0s;
  }
`;
