import React, { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledUl,
  StyledInputContaier,
} from "../components/styled/FormPage.styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupFetch } from "../module/api";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("JWT")) {
      navigate("/todo", { replace: true });
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await signupFetch({ email, password });
    if (success) {
      navigate("/signin", { replace: true });
    }
  };

  const emailValidation = () => {
    return email.includes("@");
  };

  const passwordValidation = () => {
    return password.length >= 8;
  };

  const validate = () => {
    return emailValidation() && passwordValidation();
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

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
        <StyledForm onSubmit={onSubmit}>
          <StyledInputContaier>
            <label htmlFor="email">이 메 일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChangeEmail}
              data-testid="email-input"
            />
            {emailValidation() || <span>@이 포함되어야 합니다.</span>}
          </StyledInputContaier>
          <StyledInputContaier>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              data-testid="password-input"
              value={password}
              onChange={onChangePassword}
              minLength={8}
            />
            {passwordValidation() || <span>8자 이상이어야 합니다.</span>}
          </StyledInputContaier>
          <button data-testid="signup-button" disabled={!validate()}>
            가입하기
          </button>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SignupForm;
