import styled from 'styled-components'; 
import React from 'react';





const StyledWrapper = styled.section`

width : 100vw;
height  : 100vh ; 
background-color : crimson ; 
`

const TrialPage = ({match})=>( 
    <StyledWrapper>
{console.log(match.path)}
    </StyledWrapper>
)






export default TrialPage; 