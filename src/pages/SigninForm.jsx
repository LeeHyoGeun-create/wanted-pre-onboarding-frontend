import React from "react";
import {
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledUl,
  StyledInputContaier,
} from "../components/styled/FormPage.styled";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledUl>
          <li>
            <Link to="/signin">로 그 인</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </StyledUl>
        <StyledForm>
          <StyledInputContaier>
            <label htmlFor="email">이 메 일</label>
            <input type="email" id="email" data-testid="email-input" />
          </StyledInputContaier>
          <StyledInputContaier>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              data-testid="password-input"
              minLength={8}
            />
          </StyledInputContaier>
          <button data-testid="signin-button">로그인하기</button>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SigninForm;
