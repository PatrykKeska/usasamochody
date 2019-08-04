import React from 'react'
import styled,{css} from 'styled-components'; 
import NavButton from '../../atoms/NavButton/NavButton';
import {NavLink} from 'react-router-dom';
import NavBackground from '../../../assets/backrounds/nav/headerMobile.jpg'

const StyledWrapper = styled.nav`
width : 100vw; 
background-color :hsl(95, 53%, 53%);
height : 100vh;
position : fixed; 
top : 0 ; 
left : 0; 
z-index : 5;
animation : appear .2s linear both; 
will-change : transform; 



@keyframes appear {
    0%{ 
        transform :translateX(100vw);
    }

    100%{ 
         
    }
}

`

const StyledUl = styled.ul`
width : 100% ; 
height : 100% ; 
display : flex ; 
padding : 10px;
justify-content : center ; 
align-items : center ; 
flex-direction : column; 

`

const BurgerButton = styled.button` 
background-color: transparent;  
position : fixed ;  
top : 10px; 
right : 10px; 
border : none; 
z-index : 10;
display : flex; 
flex-direction : column; 


:hover { 
    cursor: pointer;
}

span{ 
display : block ; 
width : 50px; 
height : 3px; 
background-color : crimson; 
margin : 5px;
transition : transform .3s ease-in-out;
will-change : transform ; 
}
${({black})=> black&& css `
span{ 
    background-color : black;
}
`}

:hover .spn1 { 
   transform : rotate(-30deg);
}
:hover .spn2 { 
   transform : translateX(5%);
}
:hover .spn3 { 
   transform : rotate(30deg);
}


`

const CloseButton = styled.button` 
background-color: transparent;  
position : fixed ;  
border : none;
top : 10px;
text-align : center; 
right : 5px; 
color : crimson;
padding : 15px 15px; 
border : none;  
transition : transform .2s linear ; 
will-change : transform ; 
 
:hover { 
    cursor: pointer;
    transform: scale(.8);
}


span{ 
display : block ; 
width : 50px; 
color : greenyellow;
height : 3px; 
background-color : crimson;
margin : 2px;
animation : appear .3s .2s  ease-in-out both;
transition: transform .3s ease-in-out; 
will-change : transform ;
}







.spc1{ 
    animation : appearSpan.3s .2s  ease-in-out both, rotatePlus .2s .4s  ease-in-out both
}
.spc2{ 
    animation : appearSpan .3s .2s  ease-in-out both, rotateMinus .2s .4s  ease-in-out both
}



@keyframes appearSpan {
    0%{ 
        opacity :0; 

    }

    100%   { 
    

    }
}

@keyframes rotatePlus {
    0%{ 
          transform : rotate(0)translateX(100px);
    }

    100%{ 
     transform : rotate(45deg)translate(0);
    }
}
@keyframes rotateMinus {
    0%{ 
          transform : rotate(0)translateX(-100px);
    }

    100%{ 
     transform : rotate(-45deg)translate(0);
    }
}

`








class Nav extends React.Component{ 
state = {
    isOpen : false, 
}


handleNavOpen = ()=>  ( 
    this.setState({ 
        isOpen : true
    })
)

handleNavClose = ()=>  ( 
    this.setState({ 
        isOpen : false
    })
)



render (){ 

    const {black} = this.props; 
    return ( 
          this.state.isOpen ? ( <StyledWrapper NavBackground={NavBackground}>
            <StyledUl>
        <CloseButton onClick={this.handleNavClose}> <span className='spc1'/><span className='spc2'/> </CloseButton>

        <NavButton onClick={this.handleNavClose} exact as={NavLink}  to='/'>O NAS</NavButton>
       
        <NavButton onClick={this.handleNavClose} as={NavLink}  to='/oferty'>OFERTY</NavButton>


        <NavButton onClick={this.handleNavClose} as={NavLink}  to='/galeria' >GALERIA</NavButton>

        <NavButton onClick={this.handleNavClose} as={NavLink}  to='/kontakt'>KONTAKT</NavButton>

        </StyledUl>
        </StyledWrapper>  ) : ( <BurgerButton black={black} onClick={this.handleNavOpen} >
         <span className='spn1'/>
         <span className='spn2'/>
         <span className='spn3'/>
        </BurgerButton>) 
         
        
    )

}


}









export default Nav; 