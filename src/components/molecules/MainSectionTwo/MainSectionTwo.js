import React from 'react'
import Section from '../../atoms/Section/Section';
import shipping from '../../../assets/backrounds/Section/Shipping1920.jpg'
import shippingMobile from '../../../assets/backrounds/Section/Shipping640.jpg'
import Heading from '../../atoms/Heading/Heading';
import Description from '../../atoms/Description/Description'; 
import ClipPath from '../../atoms/ClipPath/ClipPath';



const MainSectionTwo = ()=> ( 
<Section img={shipping} mobile={shippingMobile}>
<ClipPath white>
<Heading blue> 
Sprowadzamy
</Heading>

<Description blue>
ZAŁATWIAMY FORMALNOŚCI W USA
 ORAZ ORGANIZUJEMY WYSYŁKĘ DO POLSKI.
 ZAJMUJEMY SIĘ WSZYSTKIMI DOKUMENTAMI
 ZWIĄZANYMI Z CŁEM, AKCYZĄ I VATEM
</Description>

</ClipPath> 

</Section>

)



export default MainSectionTwo