import React from 'react';
import Header from '../Components/Header/Header';
import { Container } from 'react-grid-system';
import Footer from '../Sections/Footer/Footer';
import StudentSignup from '../Sections/StudentSignup/StudentSignup';
import StudentSplashSection from '../Sections/StudentSplashSection/StudentSplashSection';
import WhatYouNeedSection from '../Sections/WhatYouNeedSection/WhatYouNeedSection';
import WeGotYourBackSection from '../Sections/WeGotYourBackSection/WeGotYourBackSection';
import TimeScheduleSection from '../Sections/TimeScheduleSection/TimeScheduleSection';
import ProjectSection from '../Sections/ProjectsSection/ProjecsSection';


const Student = props => {
  return (
    <>
      <StudentSplashSection />
      <WhatYouNeedSection />
      <ProjectSection teaser='Your project could be featured here too' />
      <TimeScheduleSection />
      <StudentSignup
        changeStudentModalVisibility={props.changeStudentModalVisibility}
      />
    </>
  );
};

export default Student;
