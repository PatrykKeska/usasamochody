import styled from "styled-components";

const NavButton = styled.a`
  text-decoration: none;
  display: block;
  position: relative;
  text-align: center;
  font-size: 0.8em;
  font-weight: 400;
  margin: 10px;
  padding: 20px 10px;
  color: white;
  border: none;
  z-index: 10;
  overflow: hidden;
  padding: 5px 30px;
  font-family: "Roboto Condensed", sans-serif;
  border-radius: 20px;
  font-weight: bold;

  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  ::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 20px 20px 20px 20px;
    transform: translateY(110%);
    transition: transform 0.2s ease-in-out;
    will-change: transform;
  }

  :hover::after {
    transform: translateY(0);
  }
`;

export default NavButton;
