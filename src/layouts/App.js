import React, { Component } from 'react';
import "../styles/App.css"
import { HashRouter as Router } from 'react-router-dom';
import Header from "../layouts/Header"
import Navigation from "../layouts/Navigation"
import MainTemplate from '../Templates/MainTemplate';
import Page from "../layouts/Page";
import LookingForMobile from '../images/backgrounds/LookingFor640.jpg'
import LookingFor from '../images/backgrounds/LookingFor1920.jpg'
import WorkshopMobile from '../images/backgrounds/Workshop640.jpg'
import Workshop from '../images/backgrounds/Workshop1920.jpg'
import shipping from '../images/backgrounds/Shipping1920.jpg';
import shippingMobile from '../images/backgrounds/Shipping640.jpg'
import ExperienceMobile from '../images/backgrounds/Experience640.jpg'
import Experience from '../images/backgrounds/Experience1920.jpg'
import Section from '../components/atoms/Section/Section';





class App extends Component {

  render() {

    return (
      
        <Router>
          <MainTemplate>
          <div className="main-div-app">
            <header className="main-app-header">
              <Header />
            </header>
            <main>
              <aside>
                <Navigation />
              </aside>
              <section className="main-section-page">
                {<Page handleScroll={this.handleScroll} />}
              </section>
            </main>
            <Section blur img={LookingFor} mobile={LookingForMobile}/>
            <Section img={shipping} mobile={shippingMobile}/>
            <Section blur img={Workshop} mobile={WorkshopMobile}/>
            <Section img={Experience} mobile={ExperienceMobile}/>

          </div>
          </MainTemplate>
        </Router >
      

    );
  }
}

export default App;
