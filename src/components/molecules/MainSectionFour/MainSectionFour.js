import React from 'react'
import Section from '../../atoms/Section/Section';
import ExperienceMobile from '../../../assets/backrounds/Section/Experience640.jpg'
import Experience from '../../../assets/backrounds/Section/Experience1920.jpg'
import Heading from '../../atoms/Heading/Heading';
import styled from 'styled-components'; 
import Description from '../../atoms/Description/Description'

const InnerWrapper = styled.div`
width  : 100% ; 
height : 100%; 
position : relative; 
padding : 30px 50px; 
z-index : 10; 
`

const MainSectionFour = ()=> ( 
<Section blur img={Experience} mobile={ExperienceMobile}>
<InnerWrapper>
 <Heading>
 Doświadczenie
 </Heading>
 <Description>
 MAMY ZA SOBĄ WIELOLETNIE DOŚWIADCZENIE, 
 DZIESIĄTKI SPROWADZONYCH SAMOCHODÓW 
ORAZ GRONO ZADOWOLONYCH KLIENTÓW. 
 Z NAMI MASZ PEWNOŚĆ UDANEGO I BEZPIECZNEGO ZAKUPU.
 
 </Description>


 </InnerWrapper>
</Section>

)



export default MainSectionFour