import styled, {css} from 'styled-components'; 


const Heading = styled.h2`
font-size : .8em ; 
color : white;  
width : 50%; 
position :absolute; 
margin : 0 auto; 
text-align : center ; 
text-transform : uppercase; 
padding : 10px 20px; 
top : 5%; 
left : 1%;




${({blue})=> blue && css `
color : ${({theme})=> theme.colors.blue}; 
` }
`




export default Heading ; 