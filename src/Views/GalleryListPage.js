import React from 'react';
import styled from 'styled-components'; 
import GalleryNav from '../components/molecules/GalleryNav/GalleryNav';
import Nav from '../components/molecules/Navigation/Nav';

const StyledWrapper = styled.section`
width : 100vw; 
min-height : 100vh; 
background-color : ${({theme})=> theme.colors.blue}; 


`




const GalleryListPage = ()=> (
    <>
    <Nav/>
<StyledWrapper>
   <GalleryNav/>
</StyledWrapper>
</>
)










export default GalleryListPage;