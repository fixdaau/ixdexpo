import React, { Component } from 'react';
import './App.scss';
import { Col, Container, Row } from 'react-grid-system';
import H1 from '../Components/H1/H1';
import Card from '../Components/Card/Card';
import WhatIsInteractiondesignFront from '../Components/WhatIsInteractiondesign/WhatIsInteractiondesignFront';
import HowDoesInteractiondesignFitFront from '../Components/HowDoesInteractiondesignFit/HowDoesInteractionDesignFitFront';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6}>
            <H1>First Title Component</H1>
          </Col>
          <Col xs={6}>
            <H1>Second Title Component</H1>
            <Card
              front={<WhatIsInteractiondesignFront />}
              back={<HowDoesInteractiondesignFitFront />}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
