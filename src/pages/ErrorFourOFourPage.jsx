import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const ErrorImage = styled.img`
  width: 100%;
`;
const ErrorFourOFourPage = () => {
  return (
    <Container>
      <Navbar />
      <ErrorImage src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" />
      <Footer />
    </Container>
  );
};

export default ErrorFourOFourPage;
