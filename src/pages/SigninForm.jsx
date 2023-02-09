import React, { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledUl,
  StyledInputContaier,
} from "../components/styled/FormPage.styled";
import { Link } from "react-router-dom";
import { signinFetch } from "../module/api";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
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
    setEmail("");
    setPassword("");
    const success = await signinFetch({ email, password });
    if (success) {
      navigate("/todo", { replace: true });
    }
  };

  const emailValidation = (email) => {
    return email.includes("@");
  };

  const passwordValidation = () => {
    return password.length >= 8;
  };

  const validate = () => {
    return emailValidation(email) && passwordValidation(password);
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
          </StyledInputContaier>
          <button data-testid="signin-button" disabled={!validate()}>
            로그인하기
          </button>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default SigninForm;
