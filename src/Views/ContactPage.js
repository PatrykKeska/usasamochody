import React from "react";
import Nav from "../components/molecules/Navigation/Nav";
import Form from "../components/atoms/Form/Form";
import styled from "styled-components";

const StyledWrapper = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  animation: appearSectionsXR 0.35s linear both;
  will-change: transform;

  @keyframes appearSectionsXR {
    0% {
      opacity: 0;
    }

    100% {
    }
  }
`;

const Styledh3 = styled.h3`
  font-size: 0.7em;
  text-align: center;
  color: white;
`;

const ContactPage = () => (
  <>
    <Nav />
    <StyledWrapper>
      <Styledh3>Zapraszamy do Kontaktu</Styledh3>
      <Form />
    </StyledWrapper>
  </>
);

export default ContactPage;
