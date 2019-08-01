import React, { Component } from 'react';
import "../styles/HomePage.css"
import Footer from '../layouts/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTools, faShippingFast, faHandshake, } from '@fortawesome/free-solid-svg-icons'
import Section from '../components/atoms/Section/Section';
library.add(faSearch, faTools, faShippingFast, faHandshake)




class HomePage extends Component {
   
    render() {


        return (
            <>
{/* 
        < div className="home-page-wrapper" >

           <div className="searching">
               <h3> <span className='home-page-h3-span'> <FontAwesomeIcon icon="search"></FontAwesomeIcon></span>Wyszukujemy</h3>
               <p>doradzamy w wyborze, analizujemy aukcje pod kątem stanu technicznego pojazdu oraz opłacalności ewentualnych napraw.</p>
           </div>

           <Section>

           </Section>

           <div className="shipping">
               <h3> <span className='home-page-h3-span'><FontAwesomeIcon icon="shipping-fast"></FontAwesomeIcon></span>Sprowadzamy</h3>
               Załatwiamy formalności w USA oraz organizujemy wysyłkę do Polski. Zajmujemy się Wszystkimi formalnościami związanymi z Cłem, Akcyzą i Vatem
       </div>

           <div className="repair">
               <h3><span className='home-page-h3-span'><FontAwesomeIcon icon="tools"></FontAwesomeIcon></span>Pomagamy w Naprawie</h3>
               Dobieramy oraz sprowadzamy odpowiednie części, zajmujemy się kompleksową naprawą.
       </div>

           <div className="experience">
               <h3><span className='home-page-h3-span'><FontAwesomeIcon icon="handshake"></FontAwesomeIcon></span>Doświadczenie</h3>
               Mamy za sobą  wieloletnie doświadczenie, dziesiątki sprowadzonych samochodów
               oraz  grono zadowolonych klientów. Z nami Masz pewność udanego i bezpiecznego zakupu.
       </div>
           <Footer />
       </div > */}

        </>
        );

    }
}


export default HomePage;
