import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 29px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: Space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type === "filled" && "none"};
  ${
    "" /* the props here checks if the type is filled it is going to be black and if it not it wwould be trasnparent (the ? makes the props a conditional statement) */
  }
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  font-size: large;
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountConatiner = styled.div`
  display: flex;
  align-item: center;
  font-weight: 700;
  margin-bottom: 20px;
`;
const ProductAmmount = styled.div`
  width: 30px;
  height: 30px;
  font-size: 24px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const ProductPrice = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

const SummaryTitle = styled.div`
  font-weight: 200;
`;
const SummaryItem = styled.h1`
  margin: 30px 0;
  display: flex;
  justify-content: space- between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title> YOUR SUIT </Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (5)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/063597/1.jpg?6985" />
                <Details>
                  <ProductName></ProductName>
                  <ProductId>
                    <b>ID:</b> 9675867657
                  </ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> 18.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountConatiner>
                  <Add />
                  <ProductAmmount>2</ProductAmmount>
                  <Remove />
                </ProductAmountConatiner>
                <ProductPrice>#50,000</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetail>
                <Image src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/A/124210_1521464741.jpg" />
                <Details>
                  <ProductName></ProductName>
                  <ProductId>
                    <b>ID:</b> 9675867657
                  </ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> 18.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountConatiner>
                  <Add />
                  <ProductAmmount>2</ProductAmmount>
                  <Remove />
                </ProductAmountConatiner>
                <ProductPrice>#50,000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>#100,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>#10,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice> - #70,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>#100,000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
