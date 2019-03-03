import React from 'react';
import './ProjectSignupCard.scss';

const ProjectSignupCard = ({ title, students, projectId, enrollStudent }) => {
    return (
        <div className='sign-up-card'>
            <div className='project-card-title'>{title}</div>
            {
                students.map((s, i) =>
                    <div  key={i} style={{ display: 'inline-block', marginRight: '8px' }}>
                        <img alt='' className='project-student-icon' src={require('../../Images/Icons_User.svg')} />
                        <span className='project-student'>{s.name}</span>
                    </div>
                )
            }
        </div>
    );
};

export default ProjectSignupCard;