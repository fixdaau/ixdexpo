import React from 'react';
import SplashSection from '../Sections/SplashSection/SplashSection';
import Header from '../Components/Header/Header';
import Footer from '../Sections/Footer/Footer';
import Divider from '../Components/Divider/Divider';
import ProjectsSection from '../Sections/ProjectsSection/ProjecsSection';
import TimeScheduleSection from '../Sections/TimeScheduleSection/TimeScheduleSection';
import InteractionDesignSection from '../Sections/InteractionDesignSection/InteractionDesignSection';

const Main = props => {
  return (
    <>
      <SplashSection />
      {/* <Divider marginOnTop={true} marginOnBottom={true} />
                <CompanyLogosSection /> */}
      <Divider marginOnTop={true} marginOnBottom={true} />
      <InteractionDesignSection />
      <Divider marginOnTop={true} marginOnBottom={true} />
      <TimeScheduleSection />
      <Divider marginOnTop={true} marginOnBottom={true} />
      <ProjectsSection />
      {/* <Divider marginOnTop={true} marginOnBottom={true} /> */}
      {/* <InterestedCompanySection />                     */}
      <Footer />
    </>
  );
};

export default Main;
