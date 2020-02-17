import React from 'react';
import Header from '../Components/Header/Header';
import { Container } from 'react-grid-system';
import Footer from '../Sections/Footer/Footer';
import StudentSignup from '../Sections/StudentSignup/StudentSignup';
import StudentSplashSection from '../Sections/StudentSplashSection/StudentSplashSection';
import Divider from '../Components/Divider/Divider';
import WhatYouNeedSection from '../Sections/WhatYouNeedSection/WhatYouNeedSection';
import WeGotYourBackSection from '../Sections/WeGotYourBackSection/WeGotYourBackSection';
import TimeScheduleSection from '../Sections/TimeScheduleSection/TimeScheduleSection';
import CompanyLogosSection from '../Sections/CompanyLogosSection/CompanyLogosSection';

const Student = (props) => {
    return (
        <>
            <Header />
            <Container>
                <StudentSplashSection />
                {/* <Divider marginOnTop={true} marginOnBottom={true} />
                <CompanyLogosSection /> */}
                <Divider marginOnTop={true} marginOnBottom={true} />
                <TimeScheduleSection />
                <Divider marginOnTop={true} marginOnBottom={true} />
                <WhatYouNeedSection />
                <Divider marginOnTop={true} marginOnBottom={true} />
                <WeGotYourBackSection />
                <Divider marginOnTop={true} marginOnBottom={true} />
                <StudentSignup changeStudentModalVisibility={props.changeStudentModalVisibility} />
            </Container>
            <Footer />
        </>
    );
};

export default Student;