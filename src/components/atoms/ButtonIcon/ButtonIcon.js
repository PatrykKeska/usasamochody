import styled from 'styled-components'; 


const ButtonIcon = styled.button `
 
text-decoration : none; 
display :block ;
text-align : center; 
font-size : 2em; 
margin : 10px;  
border : none; 
background-color : transparent;
z-index :1; 
padding : 5px 30px;
border-radius : 20px;
font-weight : bold; 
width : 1em ; 
height : 1em;  
background-image: url(${({img})=>img});
background-repeat : no-repeat; 
background-position : center; 
background-size :cover; 


@media(min-width: 500px) and (orientation:landscape){ 
    width : .8em; 
    height : .8em; 
    justify-self : center;
    grid-row : 2/2;
    align-self : start;

}
 ` 






export default ButtonIcon; 