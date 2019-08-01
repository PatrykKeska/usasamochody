import styled, {css} from 'styled-components'; 


const Description = styled.p`
font-size : .5em ; 
font-weight : bold; 
padding : 30px 20px; 
color : white;  
text-align : center ; 
text-transform : uppercase; 
position : absolute; 
top : 15%;
 left : 0%; 

 @media (orientation : landscape) and (min-width :640px ){ 
width : 40%; 
font-size : .4em;

}


${({blue})=> blue && css `
color :#74C4FF ; 

` }
`


export default Description ; 