import {createGlobalStyle} from 'styled-components'; 


const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{ 
    font-size: calc(1em + 1vw) ;
    font-family: 'Roboto Condensed', sans-serif;
}

body { 
    font-family: 'Roboto Condensed', sans-serif;
    font-size : 1.6rem; 
    margin : 0 auto; 
    display : flex; 
    justify-content : center; 
    align-items : center;
    overflow-x : hidden;
}
`


export default GlobalStyle; 