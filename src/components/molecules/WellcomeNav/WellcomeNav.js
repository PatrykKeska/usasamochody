import React from "react";
import styled from "styled-components";
import NavButton from "../../atoms/NavButton/NavButton";
import { NavLink } from "react-router-dom";

const StyledWrapper = styled.nav`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-bottom: 2vh;
  padding: 20px 10px;
`;

const StyledButoon = styled(NavButton)`
  font-size: 0.5em;
  font-family: "Indie Flower", cursive;
  width: 40%;
  max-width: 200px;
  box-shadow: 0 0 2px 2px white;

  @media (orientation: landscape) and (min-width: 560px) {
  }
`;

const WellcomeNav = () => (
  <StyledWrapper>
    <StyledButoon exact as={NavLink} to="/onas">
      O NAS
    </StyledButoon>

    <StyledButoon as={NavLink} to="/oferty">
      OFERTY
    </StyledButoon>

    <StyledButoon as={NavLink} to="/galeria">
      GALERIA
    </StyledButoon>

    <StyledButoon as={NavLink} to="/kontakt">
      KONTAKT
    </StyledButoon>
  </StyledWrapper>
);

export default WellcomeNav;
