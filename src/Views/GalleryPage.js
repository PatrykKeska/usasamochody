import React from 'react';
import styled from 'styled-components'; 
import {Route,Switch} from 'react-router-dom'; 
import GalleryNav from '../components/molecules/GalleryNav/GalleryNav';
import ContactPage from './ContactPage';
import AudiPage from './Gallery/AudiPage';

const StyledWrapper = styled.section`
width : 100vw; 
min-height : 100vh; 
background-color : royalblue; 


`




const GalleryPage = ()=> (
<StyledWrapper>
   <GalleryNav/>
</StyledWrapper>

)










export default GalleryPage;