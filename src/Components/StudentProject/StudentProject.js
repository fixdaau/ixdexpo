import React from 'react';
import H3 from '../H3/H3';

const StudentProject = ({ title, description, imgSrc }) => {
    return (
        <div className="Card">
            <div className="test">
                <img
                    className="img"
                    src={require(`../../Images/${imgSrc}`)}
                    alt={title}
                />
                <H3>{title}</H3>
                <p>{description}</p>
            </div>
        </div>       
    );
};

export default StudentProject;