import styled, {css} from 'styled-components'; 


const Heading = styled.h2`
font-size : 1em ; 
color : white;  
text-align : center ; 
text-transform : uppercase; 


${({blue})=> blue && css `
font-size :#74C4FF ; 

` }
`




export default Heading ; 