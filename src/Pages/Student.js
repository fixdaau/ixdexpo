import React from 'react';
import Header from '../Components/Header/Header';
import { Container } from 'react-grid-system';
import Footer from '../Sections/Footer/Footer';
import StudentSignup from '../Sections/StudentSignup/StudentSignup';

const Student = () => {
    return (
        <>
            <Header />
            <Container>
                <StudentSignup />
            </Container>
            <Footer />
        </>
    );
};

export default Student;