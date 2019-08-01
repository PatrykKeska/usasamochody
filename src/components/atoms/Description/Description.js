import styled, {css} from 'styled-components'; 


const Description = styled.p`
font-size : .7em ; 
color : white;  
text-align : center ; 
text-transform : uppercase; 


${({blue})=> blue && css `
font-size :#74C4FF ; 

` }
`


export default Description ; 