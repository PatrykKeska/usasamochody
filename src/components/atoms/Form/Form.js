import React from 'react'
import styled from 'styled-components'; 

const StyledForm= styled.form `
width : 90vw;
max-width : 550px;
min-height :500px ; 
background-color : rgba(0,0,0,.3); 
border : 2px solid white; 
border-radius : 10px;
display :flex; 
justify-content : center ;
align-items : center ; 
flex-direction : column; 
overflow : hidden;


`

const StyledLabel = styled.label`
width : 90%; 
height: 30px; 
margin : 15px; 

`

const StyledInput = styled.input `
width : 100%; 
height: 100%; 
margin : 5px;
padding : 10px; 
background-color : transparent; 
border : none ;
border-bottom :2px solid white; 

::placeholder{ 
color : white;
}

`

const Textarea = styled.textarea`
width : 90%; 
max-width : 90%; 
min-height : 200px ; 
margin : 50px;
border-radius : 10px;
padding : 10px;
overflow : hidden;

`


const Button = styled.button`
text-decoration : none; 
display :block ;
position : relative;  
text-align : center; 
font-size : .6em; 
font-weight : 400 ;
margin : 10px; 
padding : 20px 10px;
color : white; 
border : none; 
z-index :1; 
overflow : hidden;
padding : 5px 30px;
font-family: 'Roboto Condensed', sans-serif;
border-radius : 20px;
font-weight : bold; 
background-color : rgba(0,0,0,.4);


::after { 
    content : ' '; 
    position : absolute; 
    top : 0 ; 
    right : 0 ; 
    background-color : rgba(0,0,0,.7);
    width : 100%;
    height : 100% ;
    z-index : -1; 
    border-radius : 20px 20px 20px 20px;
    transform : translateY(110%);
    transition : transform .2s ease-in-out; 
    will-change : transform; 

}

:hover::after {
    transform : translateY(0); 
}

`

const StyledA = styled.a`
text-decoration : none; 
display :block ;
position : relative;  
text-align : center; 
font-size : .6em; 
font-weight : 400 ;
margin : 15px; 
padding : 20px 10px;
color : white; 
border : none; 
z-index :1; 
overflow : hidden;
padding : 5px 30px;
font-family: 'Roboto Condensed', sans-serif;
border-radius : 20px;
font-weight : bold; 
background-color : rgba(0,0,0,.4);

::after { 
    content : ' '; 
    position : absolute; 
    top : 0 ; 
    right : 0 ; 
    background-color : rgba(0,0,0,.5);
    width : 100%;
    height : 100% ;
    z-index : -1; 
    border-radius : 20px 20px 20px 20px;
    transform : translateY(110%);
    transition : transform .2s ease-in-out; 
    will-change : transform; 

}

:hover::after {
    transform : translateY(0); 
}
`


class Form extends React.Component {
state = { 
    name : '', 
    email : '', 
    message : '', 
}



handleChange = (e)=> ( 
    this.setState({ 
    [e.target.name] : e.target.value
    })
)

handleSubmit=(e)=>(
    e.preventDefault()
     


)

 
    render () {
  const {name, email , message} = this.state
return(
 <>
<StyledA href="email:kris_flo@op.pl">kris_flo@op.pl</StyledA>
<StyledA href="tel:661157984">Zadzwoń 661 157 984</StyledA>
<StyledA target="_blank" href="https://goo.gl/maps/ahQmXzKXcmKCNEn19">Zlokalizuj Nas!</StyledA>
<StyledForm  action="https://formspree.io/patrykkeska4@gmail.com" method="POST" >

<StyledLabel>
<StyledInput value={name} onChange={this.handleChange} name="name" type="name" placeholder="Podaj Imię"/>
</StyledLabel>

<StyledLabel>
<StyledInput name="email"  value={email} onChange={this.handleChange} type="email" placeholder="Podaj Email"/>
</StyledLabel>


<Textarea value={message} onChange={this.handleChange} name="message" placeholder="Wiadomość"/>

<Button type="submit" 
>Wyślij</Button>
</StyledForm>
</>
)
}}





export default Form ; 