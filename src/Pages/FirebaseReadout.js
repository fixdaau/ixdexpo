import React, { Component } from 'react';
import H1 from '../Components/H1/H1';
import { firebase } from '../Utils/Firebase';

class FirebaseReadout extends Component {

    state = {
        registeredCompanies: [],
        interestedCompanies: [],
        studentProjects: []
    }

    componentDidMount() {
        this.getRegistered();
        this.getInterested();
        this.getStudentProjects();
    }

    getRegistered = () => {
        const mappedCompanies = [];

        firebase.getRegisteredCompanies().then(r => {
            r.forEach(doc => mappedCompanies.push(doc.data()));
            this.setState({ registeredCompanies: mappedCompanies });
        });
    }

    getInterested = () => {
        const mappedCompanies = [];

        firebase.getInterestedCompanies().then(r => {
            r.forEach(doc => mappedCompanies.push(doc.data()));
            this.setState({ interestedCompanies: mappedCompanies });
        });
    }

    getStudentProjects = () => {
        const studentProjects = [];

        firebase.getRegisteredStudentProjects().then(r => {
            r.forEach(doc => studentProjects.push(doc.data()));
            this.setState({ studentProjects: studentProjects });
        });
    }

    render() {
        const { registeredCompanies, interestedCompanies, studentProjects } = this.state;

        let students = [];
        let allStudents = [];

        console.log(studentProjects)

        studentProjects.forEach(sp => {
            students.push(sp.students[0]);
        })

        studentProjects.forEach(sp => {
            allStudents.push(sp.students);
        })

        console.log(students.map(s => s.email))

        console.log([...new Set(students.map(s => s.email))])

        const flattenStudent = [].concat(...allStudents);

        const final = [...new Set(flattenStudent.map(s => s.email))]

        console.log(flattenStudent);

        const studentArray = [];

        final.forEach(s => {
            const email = s;
            const name = flattenStudent.find(as => as.email === s).name;
            const semester = studentProjects.find(sp => sp.students.some(student => student.email === s)).currentStudentSemester;
            const projects = studentProjects.filter(sp => sp.students.some(student => student.email === s)).map(p => p.projectName);

            studentArray.push({
                name,
                email,
                semester,
                projects
            })
        })

        console.log(studentArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).filter(sa => sa.semester === '10'));

        console.log(studentArray.find( sa => sa.name === 'micl17@student.aau.dk'))

        return (
            <div>
                <div>
                    {studentArray.map((as, i) => <div key={i}>{as.name} </div>)}
                </div>
                <H1>Registered companies - {registeredCompanies.length}</H1>
                <table style={{ width: '50%' }} >
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {
                            registeredCompanies.map(rc =>
                                <tr key={rc.companyName}>
                                    <td>{rc.companyName}</td>
                                    <td>{rc.attendees.attendeeOne.name}</td>
                                    <td>{rc.attendees.attendeeOne.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <H1>Interested companies - {interestedCompanies.length}</H1>
                <table style={{ width: '50%' }} >
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {
                            interestedCompanies.map(rc =>
                                <tr key={rc.companyName}>
                                    <td>{rc.companyName}</td>
                                    <td>{rc.name}</td>
                                    <td>{rc.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <H1>Admitted projects - {studentProjects.length}</H1>
                <table style={{ width: '50%' }} >
                    <tbody>
                        <tr>
                            <th>Project name</th>
                            <th>Current semester</th>
                            <th>Project semester</th>
                        </tr>
                        {
                            studentProjects.map(rc =>
                                <tr key={rc.projectName}>
                                    <td>{rc.projectName}</td>
                                    <td>{rc.currentStudentSemester}</td>
                                    <td>{rc.projectSemester}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FirebaseReadout;