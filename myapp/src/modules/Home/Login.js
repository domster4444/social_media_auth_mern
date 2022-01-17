import React from 'react';
import styled from 'styled-components';
import GoogleBtn from 'assets/googleBtn.jpg';
import GithubBtn from 'assets/githubBtn.PNG';
import FacebookBtn from 'assets/facebookBtn.PNG';

const LoginContainer = styled.main`
  max-width: 50rem;
  min-height: 20rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 0px #ccc;
`;
const LoginForm = styled.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SocialMediaContainer = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const GoogleButton = styled.img`
  height: 3rem;
  width: 14rem;
  cursor: pointer;
  border: 1px solid black;
  transition: all ease-in-out 0.6s;
  &:active {
    transition: all ease-in-out 0.3s;
    transform: scale(0.8);
  }
`;
const GitHubButton = styled.img`
  height: 3rem;
  width: 14rem;
  cursor: pointer;
  border: 1px solid black;
  transition: all ease-in-out 0.6s;
  &:active {
    transition: all ease-in-out 0.3s;
    transform: scale(0.8);
  }
`;
const FacebookButton = styled.img`
  height: 3rem;
  width: 14rem;
  cursor: pointer;
  border: 1px solid black;
  transition: all ease-in-out 0.6s;
  &:active {
    transition: all ease-in-out 0.3s;
    transform: scale(0.8);
  }
`;

const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };
  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };
  return (
    <LoginContainer>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <LoginForm className="login__container">
        <SocialMediaContainer className="login__container--left">
          <GoogleButton src={GoogleBtn} onClick={google}></GoogleButton>
          <FacebookButton src={FacebookBtn} onClick={facebook} />
          <GitHubButton src={GithubBtn} onClick={github} />
        </SocialMediaContainer>
        <div className="login__container--right">
          <input type="text" placeholder="username" /> <br />
          <input type="password" placeholder="password" />
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
