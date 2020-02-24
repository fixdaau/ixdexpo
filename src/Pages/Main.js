import React from 'react';
import SplashSection from '../Sections/SplashSection/SplashSection';
import Header from '../Components/Header/Header';
import Footer from '../Sections/Footer/Footer';
import Divider from '../Components/Divider/Divider';
import ProjectsSection from '../Sections/ProjectsSection/ProjecsSection';
import TimeScheduleSection from '../Sections/TimeScheduleSection/TimeScheduleSection';
import InteractionDesignSection from '../Sections/InteractionDesignSection/InteractionDesignSection';
import CompanyFooterSection from '../Sections/CompanyFooterSection/CompanyFooterSection';

const Main = props => {
  return (
    <>
      <SplashSection />
      {/* <Divider marginOnTop={true} marginOnBottom={true} />
                <CompanyLogosSection /> */}
      <InteractionDesignSection />
      <ProjectsSection teaser='A little Sneak Peak of what’s to come' />
      <TimeScheduleSection />
      <CompanyFooterSection />
      {/* <Divider marginOnTop={true} marginOnBottom={true} /> */}
      {/* <InterestedCompanySection />                     */}
    </>
  );
};

export default Main;
