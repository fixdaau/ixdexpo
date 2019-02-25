import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import CompanySignupSection from '../Sections/CompanySignupSection/CompanySignupSection';
import { Container } from 'react-grid-system';
import Footer from '../Sections/Footer/Footer';

class CompanySignup extends Component {
    render() {
        const { changeModalVisibility } = this.props;
        return (
            <>
                <Header />
                <Container>
                    <CompanySignupSection changeModalVisibility={changeModalVisibility} />
                </Container>
                <Footer />
            </>
        );
    }
}

export default CompanySignup;