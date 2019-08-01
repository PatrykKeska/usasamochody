import React from 'react'
import Section from '../../atoms/Section/Section';
import LookingForMobile from '../../../assets/backrounds/Section/LookingFor640.jpg'
import LookingFor from '../../../assets/backrounds/Section/LookingFor1920.jpg'
import Heading from '../../atoms/Heading/Heading';
import Description from '../../atoms/Description/Description'; 
import ClipPath from '../../atoms/ClipPath/ClipPath';




const MainSectionOne = ()=> ( 
<Section blur img={LookingFor} mobile={LookingForMobile}>
<ClipPath>
<Heading>
    Wyszukujemy
</Heading>
<Description>  DORADZAMY W WYBORZE, 
  ANALIZUJEMY AUKCJE POD KĄTEM 
   STANU TECHNICZNEGO POJAZDU
    ORAZ OPŁACALNOŚCI  NAPRAW.</Description>
</ClipPath>
</Section>

)



export default MainSectionOne