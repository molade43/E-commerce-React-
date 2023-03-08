import React from "react";
import styled from "styled-components";
import NewsLetter from "../components/NewsLetter";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Remove, Add } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  pading: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-item: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;
const Filtersize = styled.select`
  margin-left: 30px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-item: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  background-color: white;
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="" />
        </ImageContainer>
        <InfoContainer>
          <Title>Tailorloran Blue Suit</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            nesciunt laudantium blanditiis quibusdam quas iste possimus autem
            animi ullam aut?
          </Description>
          <Price>#50,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="Blue"></FilterColor>
              <FilterColor color="Gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Filtersize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
                <FilterSizeOption>X-Large</FilterSizeOption>
              </Filtersize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
