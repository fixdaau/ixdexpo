import React, { Component } from 'react';
import './App.scss';
import { Col, Container, Row } from 'react-grid-system';
import H1 from '../Components/H1/H1';

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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
