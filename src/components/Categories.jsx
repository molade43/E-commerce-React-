import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {/* mapped through the items created in data.js, the key word "categories" is used to send the each data to the Categoryitem.jsx using the keyword "item*/}
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
