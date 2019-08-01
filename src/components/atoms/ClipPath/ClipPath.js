import styled,{css} from 'styled-components'; 


const ClipPath = styled.div `
width : 100% ; 
height : 50vh; 
clip-path: polygon(0 0, 100% 0, 100% 56%, 0% 100%);
background-color : ${({theme})=> theme.colors.blue}; 
position: relative; 
z-index : 10;

${({white})=> ( white && css `
background-color : white ; 
` )}


@media (orientation : landscape) and (min-width :640px ){ 
    width : 90% ; 
height : 100%; 
clip-path: polygon(0 0, 60% 0, 34% 100%, 0% 100%);

}
`



export default ClipPath; 


