import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(225, 225, 225, 0.5),
      rgba(225, 225, 225, 0.5)
    )
    url("");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: gray;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.div`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN </Title>
        <Form>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>LOGIN</Button>
          <Link> DO NOT REMEMBER YOUR PASSWORD?</Link>
          <Link> CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
