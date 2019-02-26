import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import InteractionDesignSection from '../Sections/InteractionDesignSection/InteractionDesignSection';


class Main extends Component {
    render() {
        return (
            <Container>
                <InteractionDesignSection />
            </Container>
        );
    }
}

export default Main;