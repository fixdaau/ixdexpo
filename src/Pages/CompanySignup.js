import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import CompanySignupSection from '../Sections/CompanySignupSection/CompanySignupSection';
import { Container } from 'react-grid-system';
import Footer from '../Sections/Footer/Footer';

class CompanySignup extends Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <CompanySignupSection />
                </Container>
                <Footer />
            </>
        );
    }
}

export default CompanySignup;