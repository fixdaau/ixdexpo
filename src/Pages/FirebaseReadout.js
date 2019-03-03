import React, { Component } from 'react';
import H1 from '../Components/H1/H1';
import { firebase } from '../Utils/Firebase';

class FirebaseReadout extends Component {

    state = {
        registeredCompanies: [],
        interestedCompanies: []
    }

    componentDidMount() {
        this.getRegistered();
        this.getInterested();
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

    render() {
        const { registeredCompanies, interestedCompanies } = this.state;

        return (
            <div>
                <H1>Registered companies</H1>
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
                <H1>Interested companies</H1>
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
            </div>
        );
    }
}

export default FirebaseReadout;