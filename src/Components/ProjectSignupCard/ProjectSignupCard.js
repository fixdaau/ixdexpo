import React from 'react';
import './ProjectSignupCard.scss';
import Button from '../Button/Button';

const ProjectSignupCard = ({ title, students, projectId, enrollStudent }) => {
    return (
        <div className='sign-up-card' >
            <div style={{display: 'inline-block', width: '70%'}}>
                <div className='project-card-title'>{title}</div>
                {
                    students.map((s, i) =>
                        <div key={i} style={{ display: 'inline-block', marginRight: '8px' }}>
                            <img alt='' className='project-student-icon' src={require('../../Images/Icons_User.svg')} />
                            <span className='project-student'>{s.name}</span>
                        </div>
                    )
                }
            </div>
            <span style={{ float: 'right' }}><Button enrollButton={true} onClick={() => enrollStudent(projectId, title)}>Enroll</Button></span>
        </div>
    );
};

export default ProjectSignupCard;