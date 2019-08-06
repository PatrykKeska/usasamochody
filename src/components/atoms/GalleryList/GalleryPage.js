import React from 'react'
import {Link} from 'react-router-dom'
import Photos from '../../molecules/Products/Products';
import styled from 'styled-components'


const StyledWrapper = styled.section`
width : 100vw; 
min-height : 100vh; 
background-color : ${({theme})=> theme.colors.blue}; 
padding :10px; 
display : flex ; justify-content : center;
align-items : center;
flex-direction : column; 

`
const StyledButton = styled.button`
display : block ; 
font-size : .6em; 
width : 200px; 
text-decoration : none; 
color : white; 
padding : 5px 10px; 
border-radius : 15px; 
text-align : center; 
background-color : rgba(0,0,0,.3);
`

const Styledh3 = styled.h3`
 font-size : .7em; 
    text-align : center; 
    color : white; 
    ::first-letter{ 
        text-transform : uppercase;
    }
    `

const GalleryPage = ({match})=> ( 
<StyledWrapper>
<Styledh3>{`${match.params.id}`}</Styledh3>
<StyledButton as={Link} to="/galeria">Powrót</StyledButton>
<Photos id={match.params.id} /> 

</StyledWrapper>
)



export default GalleryPage