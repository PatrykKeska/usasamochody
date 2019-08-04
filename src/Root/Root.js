import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../Templates/MainTemplate';
import MainPage from '../Views/MainPage';
import GalleryPage from '../Views/GalleryPage';
import OffersPage from '../Views/OffersPage';
import ContactPage from '../Views/ContactPage';
import TrialPage from '../Views/Gallery/TrialPage';







class Root extends Component {

  render() {

    return (
      
        <Router>
          <MainTemplate>
            <Switch>
            <Route exact path='/'component={MainPage} /> 
            <Route exact path='/galeria'component={GalleryPage}/>
            {/* <Route exact path='/galeria/:id'component={GalleryPage}/>  */}
            <Route path='/oferty'component={OffersPage} /> 
            <Route path='/kontakt'component={ContactPage} /> 
          
          </Switch>
          </MainTemplate>
        </Router >
      

    );
  }
}

export default Root;
