import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 360px;
    height: 40px;

    margin-top: 24px;
    background-color: #59c1bd;
    font-size: 14px;
    color: white;
    border: none;
  }
`;

export const StyledFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #bdbdbd;
  width: 457px;
  height: 470px;
  border-radius: 25px;
`;

export const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;

  a {
    padding: 18px 60px;
  }

  border-bottom: 1px solid #bdbdbd;
`;

export const StyledForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputContaier = styled.div`
  display: flex;
  width: 360px;

  margin-top: 36.5px;
  flex-direction: column;

  label {
    font-size: 18px;
    margin: 0 0 12.5px 5px;
  }

  input {
    height: 40px;
  }
`;
