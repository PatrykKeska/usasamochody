import React from "react";
import styled from "styled-components";
import header from "../assets/backrounds/Header/header.jpg";
import headerMobile from "../assets/backrounds/Header/headerMobile.jpg";
import MainHeading from "../components/atoms/MainHeading/MainHeading";
import WellcomeNav from "../components/molecules/WellcomeNav/WellcomeNav";
const StyledWrapper = styled.header`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${headerMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (orientation: landscape) and (min-width: 560px) {
    background-image: url(${header});
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  color: white;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  padding: 30px 10px;
`;

const WellcomePage = () => (
  <>
    <StyledWrapper>
      <MainHeading>
        KSMAK CARS
        <Description>Samochody z Usa</Description>
      </MainHeading>
      <WellcomeNav />
    </StyledWrapper>
  </>
);

export default WellcomePage;
