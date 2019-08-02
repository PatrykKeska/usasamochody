import React from 'react'
import Section from '../../atoms/Section/Section';
import WorkshopMobile from '../../../assets/backrounds/Section/Workshop640.jpg'
import Workshop from '../../../assets/backrounds/Section/Workshop1920.jpg'
import ClipPath from '../../atoms/ClipPath/ClipPath'; 
import Heading from '../../atoms/Heading/Heading';
import Descripion from '../../atoms/Description/Description'

const MainSectionThree = ()=> ( 
<Section  img={Workshop} mobile={WorkshopMobile}>
    <ClipPath>
 <Heading>Pomagamy w Naprawie
 </Heading>
<Descripion>
DOBIERAMY ORAZ SPROWADZAMY ODPOWIEDNIE CZĘŚCI,
 ZAJMUJEMY SIĘ KOMPLEKSOWĄ NAPRAWĄ.
</Descripion>

    </ClipPath>


</Section>

)



export default MainSectionThree