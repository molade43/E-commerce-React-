import { EmailOutlined, Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, tabletScreen } from "../responsiveMobileCss";

const Container = styled.div`
  ${"" /* height: 60vh; */}
  width: 100%;
  padding: 40px 0;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3vw;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 2vw;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 100px auto;
  position: relative;
  top: 30%;
  justify-content: space-between;
`;
const EmailIcon = styled.span`
  position: relative;
  top: 9px;
  left: 13px;
  z-index: 1;
`;
const Input = styled.input`
  text-indent: 40px;
  font-size: 1vw;
  position: absolute;
  width: 100%;
  border: none;
  height: 40px;
  border-radius: 20px;
  outline: none;
  -webkit-box-shadow: -6px 21px 51px -2px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -6px 21px 51px -2px rgba(0, 0, 0, 0.21);
  box-shadow: -6px 21px 51px -2px rgba(94, 252, 232, 0.21);
`;
const Button = styled.div`
  ${"" /* flex: 1; */}
  border:none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 8px 16px 8px 16px;
  background-image: linear-gradient(130deg, #5efce8 10%, #736efe 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title> NewsLetter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <EmailIcon>
          <EmailOutlined />
        </EmailIcon>
        <Input placeholder="Get Email from Us" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
