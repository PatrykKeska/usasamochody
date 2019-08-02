import React from 'react';
import Nav from '../components/molecules/Navigation/Nav'
import Heading from '../components/atoms/Heading/Heading'
import styled from 'styled-components'; 
import BMWX3 from '../assets/offers/BMWX3.jpg'
import TiguanGray from '../assets/offers/TiguanGray.jpg'
import FordFusion from '../assets/offers/FordFusion.jpg'
import Description from '../components/atoms/Description/Description';
import NavButton from '../components/atoms/NavButton/NavButton';


const data = [
    { 
        name : 'Ford Mondeo',
        img :FordFusion,
        description : 'Ford Mondeo po lifcie full wersja TYTANIUM, silnik 2.0 benzyna - moc 250 KM, skrzynia automatyczna, łopatki zmiany biegów....', 
        link : 'https://www.otomoto.pl/oferta/ford-mondeo-fusion-2-0-benzyna-ful-wersja-titanium-ID6C4rdf.html'
    },
    { 
        name : 'BMW X3',
        img : BMWX3, 
        description : 'BMW X3 F25 Z ROKU 2017 Przebieg to 16 tyś kilometrów, silnik 2.0 benzyna 245 km, automat 4x4 xdrive...', 
        link : 'https://www.otomoto.pl/oferta/bmw-x3-2-0-benzyna-250-km-4x4-xdrive-ID6BOP67.html'
    },
    { 
        name : 'Volkswagen Tiguan 4x4 ',
        img : TiguanGray,
        description : 'TIGUAN 2,0 benzyna- TSI,moc 200 KM, skrzynia biegów automatyczna, napęd na 4 koła 4motion ...', 
        link : 'https://www.otomoto.pl/oferta/volkswagen-tiguan-4x4-4motion-ID6BXjCk.html'
    },

]

    
    const StyledWrapper = styled.section `
    min-width : 100vw; 
    min-height : 100vh; 
    position : relative; 
    background-color: ${({theme})=> theme.colors.blue}; 
    padding : 100px 50px; 


    
    `

    const StyledH2 = styled.h2`
    color : white ;
    font-size: .8em ; 
    margin : 10px 10px 50px 10px ; 
    padding : 10px; 
    text-align : center; 
    
    `

    const StyledGrid = styled.div`
    display : grid; 
    grid-template-columns : repeat(auto-fill, minmax(200px, 1fr)); 
      grid-gap : 100px 50px; 

      @media(min-width:500px){ 
        grid-template-columns : repeat(auto-fill, minmax(300px, 1fr)); 

      }
      @media(orientation:landscape) and (min-width:1400px){ 
        grid-template-columns : repeat(auto-fill, minmax(400px, 1fr)); 

      }
    `

    const StyledCard = styled.div`
    min-height : 400px;
    display : flex ; 
    justify-content : space-between ; 
    align-items : center; 
    flex-direction : column; 
    overflow : hidden;
    border : 2px solid white; 
    padding : 10px; 
    margin : 5px; 
    box-shadow : 0 0 10px 3px white; 
    background-color : rgba( 0,0,0,.3);
    border-radius : 10px;
    ` 

    const StyledH3 = styled.h3`
    font-size : .7em; 
    text-align : center; 
    color : white; 
    `

    const StyledImg = styled.img`
    max-width : 100%; 
    max-height : 100%; 
    width : 250px ;
    overflow : hidden ; 
    border-radius : 10px;
    ` 

    const StyledP = styled.p`
     font-size : .5em ;
     text-align : center; 
    width : 60%;
    color : white;

    @media(min-width : 1200px){ 
        font-size : .3em;
    }
    `

    const StyledA = styled(NavButton)`
     display : block ; 
     font-size : .6em; 
     text-align : center; 
     background-color : rgba(0,0,0,.2);

    `

const Items = data.map(item=>(
    <StyledCard key={item.name}>
        <StyledH3>{item.name}</StyledH3>
        <StyledImg src={item.img} alt={item.name}/>
        <StyledP>{item.description}</StyledP>
        <StyledA target="_blank" href={item.link}>Aukcja</StyledA>
    </StyledCard>
))


const OffersPage = ()=> (
<StyledWrapper>
<Nav/>
<StyledH2>Zapraszamy Do Zapoznania się z Aktualnymi Ofertami</StyledH2>
<StyledGrid>
{Items}
</StyledGrid>
</StyledWrapper>

)










export default OffersPage;