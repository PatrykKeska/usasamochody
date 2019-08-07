import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Ford from "../../../assets/gallery/ButtonIcon/ford.png";
import Audi from "../../../assets/gallery/ButtonIcon/audi.png";
import Bmw from "../../../assets/gallery/ButtonIcon/bmw.png";
import Volkswagen from "../../../assets/gallery/ButtonIcon/volkswagen.png";
import Mercedes from "../../../assets/gallery/ButtonIcon/mercedes-benz.png";
import Jeep from "../../../assets/gallery/ButtonIcon/Jeep.png";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 500px) and (orientation: landscape) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 200px 1fr;
  }
`;

const Styledh2 = styled.h2`
  color: white;
  font-size: 0.8em;
  margin: 10px 10px 50px 10px;
  padding: 10px;
  text-align: center;

  @media (min-width: 500px) and (orientation: landscape) {
    grid-column: 1/ 7;
    grid-row-start: 1;
  }
`;

const GalleryNav = () => (
  <StyledWrapper>
    <Styledh2>Przykładowe modele, które sprowadziliśmy</Styledh2>
    <ButtonIcon img={Ford} as={NavLink} to="/galeria/ford" />
    <ButtonIcon img={Audi} as={NavLink} to="/galeria/audi" />
    <ButtonIcon img={Volkswagen} as={NavLink} to="/galeria/volkswagen" />
    <ButtonIcon img={Bmw} as={NavLink} to="/galeria/bmw" />
    <ButtonIcon img={Mercedes} as={NavLink} to="/galeria/mercedes" />
    <ButtonIcon img={Jeep} as={NavLink} to="/galeria/jeep" />
  </StyledWrapper>
);

export default GalleryNav;
