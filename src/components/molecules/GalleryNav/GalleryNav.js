import React from 'react'
import styled from 'styled-components'; 
import {NavLink, Route, Switch} from 'react-router-dom'
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon'; 
import Ford from '../../../assets/gallery/ButtonIcon/ford.png'
import Audi from '../../../assets/gallery/ButtonIcon/audi.png'


const StyledWrapper = styled.div`
width : 100% ; 
height : 100% ; 

`


const GalleryNav = ()=> ( 
<StyledWrapper>

<ButtonIcon img={Ford} as={NavLink} to='/galeria/ford' />
<ButtonIcon  img={Audi} as={NavLink} to='/galeria/audi' />


</StyledWrapper>


)



export default GalleryNav; 