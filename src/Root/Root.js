import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "../layouts/Header"
import Navigation from "../layouts/Navigation"
import MainTemplate from '../Templates/MainTemplate';
import MainPage from '../Views/MainPage';
import GalleryPage from '../Views/GalleryPage';
import OffersPage from '../Views/OffersPage';
import ContactPage from '../Views/ContactPage';






class Root extends Component {

  render() {

    return (
      
        <Router>
          <MainTemplate>
            <Switch>
            <Route exact path='/'component={MainPage} /> 
            <Route path='/galeria'component={GalleryPage} /> 
            <Route ath='/oferty'component={OffersPage} /> 
            <Route path='/kontakt'component={ContactPage} /> 
          
          </Switch>
          </MainTemplate>
        </Router >
      

    );
  }
}

export default Root;
