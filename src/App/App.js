import React, { Component } from 'react';
import './App.scss';
import { Col, Container, Row } from 'react-grid-system';
import H1 from '../Components/H1/H1';
import { Route } from 'react-router-dom';
import Main from '../Pages/Main';
import CompanySignup from '../Pages/CompanySignup';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/company-signup' component={CompanySignup} />
      </div>
    );
  }
}

export default App;
