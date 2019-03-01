import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import SplashSection from '../Sections/SplashSection/SplashSection';
import Header from '../Components/Header/Header';
import Footer from '../Sections/Footer/Footer';
import Divider from '../Components/Divider/Divider';
import ProjectsSection from '../Sections/ProjectsSection/ProjecsSection';
import TimeScheduleSection from '../Sections/TimeScheduleSection/TimeScheduleSection';
import InterestedCompanySection from '../Sections/InterestedCompanySection/InterestedCompanySection';
import InteractionDesignSection from '../Sections/InteractionDesignSection/InteractionDesignSection';


class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <SplashSection />
                    <Divider marginOnTop={true} marginOnBottom={true} />
                    <InteractionDesignSection />
                    <Divider marginOnTop={true} marginOnBottom={true}  />
                    <TimeScheduleSection />
                    <Divider marginOnTop={true} marginOnBottom={true} />
                    <ProjectsSection />
                    <Divider marginOnTop={true} marginOnBottom={true} />
                    <InterestedCompanySection />                    
                </Container>
                <Footer />
            </>
        );
    }
}

export default Main;