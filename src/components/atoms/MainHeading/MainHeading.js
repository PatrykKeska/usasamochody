import styled from "styled-components";

const Heading = styled.h1`
  font-size: 1em;
  color: white;
  width: 100%;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 20vh;
  font-family: "Indie Flower", cursive;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 10px;

  @media (orientation: landscape) and (min-width: 560px) {
    width: 80%;
    font-size: 0.8em;
    padding: 2px 5px;
    margin-top: 5vh;
  }
`;

export default Heading;
