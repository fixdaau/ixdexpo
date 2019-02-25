import React, { Component } from 'react';
import {Container} from 'react-grid-system';
import SplashSection from '../Sections/SplashSection/SplashSection';
import Header from '../Components/Header/Header';
import Footer from '../Sections/Footer/Footer';
import WhatIsSection from '../Sections/WhatIsSection/WhatIsSection';
import Divider from '../Components/Divider/Divider';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <SplashSection />
                    <Divider style={{marginBottom: '120px'}} />
                    <WhatIsSection />
                </Container>
                <Footer />
            </>
        );
    }
}

export default Main;