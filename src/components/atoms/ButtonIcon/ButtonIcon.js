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
width : 100px ; 
height : 100px; 
background-image: url(${({img})=>img});
background-repeat : no-repeat; 
background-position : center; 
background-size :cover; 

 ` 






export default ButtonIcon; 