import React from 'react'
// import {ThemeProvider} from 'styled-components'; 
import GlobalStyle from '../theme/GlobalStyle';



const MainTemplate = ({children})=> ( 
<>
<GlobalStyle/>
{/* <ThemeProvider> */}
{children}
{/* </ThemeProvider> */}

</>




)








export default MainTemplate; 