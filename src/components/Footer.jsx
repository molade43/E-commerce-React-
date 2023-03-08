import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex: 1;
`;
const Description = styled.p`
  flex: 1;
  margin: 20px 0;
`;
const SocialMediaContainer = styled.div`
  flex: 1;
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  ${"" /* using props to diffrentiate the color of each social media icon */}
  background-color: #${(props) => props.color};;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 25%;
  background-color: transparent;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SOS STORE</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          minima cum tenetur fuga et magnam aliquam ipsum unde eveniet beatae.
        </Description>
        <SocialMediaContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem> Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 29 CMD Road, Lagos Nigeria
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 08051930887
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> sosstore@sos.com
        </ContactItem>
        <Payment src="data:image/png;base64,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" />
      </Right>
    </Container>
  );
};

export default Footer;
