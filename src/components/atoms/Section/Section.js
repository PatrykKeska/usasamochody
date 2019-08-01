import React from 'react';
import styled, {css} from 'styled-components'; 




const StyledWrapper = styled.section`
width: 100vw; 
height : 100vh ; 
position : relative; 
z-index: 1;
background-image : url(${({mobile})=> mobile}); 
background-repeat : no-repeat;
background-position :50% 100%;
background-size : cover;  
display : grid; 
grid-template-columns : 1; 
grid-template-rows : 2; 
opacity : .8;

@media (min-width : 600px){ 
    background-image : url(${({img})=> img}); 
    background-position : 50% 100%;  
}


::before { 
    content : ' '; 
    top : 0 ; 
    left : 0 ; 
    position : absolute ; 
    width : 100% ; 
    height : 100% ;
    background-color :rgba(0,0,0,.5);
    z-index : 1;
    
    

}

::after { 
    content : '';
    width : 100%;
    height : 10px; 
    position : absolute; 
    bottom : -5px; 
    left : 0 ; 
    z-index :5;
    background-color: #b1b4b1;
    filter: blur(5px)
}


${({blur})=> blur && css`
/* filter : blur(2px);  */

`}

`


const Section = ({img,mobile, blur, children})=>  ( 
<StyledWrapper blur={blur} mobile={mobile} img={img}>
    {children}
</StyledWrapper>


)






export default Section;