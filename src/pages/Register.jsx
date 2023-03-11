import React from "react";
import styled from "styled-components";
import { mobile, tabletScreen } from "../responsiveMobileCss";

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
  width: 40%;
  padding: 20px;
  background-color: gray;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: Wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.div`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Link = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin: 5px 0;
  text-decoration: underline;
  text-align: right;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> REGISTER </Title>
        <Form>
          <Input placeholder="Name" type="text" />
          <Input placeholder="Last Name" type="text" />
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Agreement>
            By creating this account, i consent to the processing of my perosnal
            data in accordance with <b> PRIVATE POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        <Link> Sign In</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
