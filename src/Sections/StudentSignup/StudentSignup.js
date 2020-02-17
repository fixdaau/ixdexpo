import React, { Component } from 'react';
import { firebase } from '../../Utils/Firebase';
import { Row, Col } from 'react-grid-system';
import Select from 'react-select';
import H2 from '../../Components/H2/H2';
import Button from '../../Components/Button/Button';
import './StudentSignup.scss';
import ProjectSignupCard from '../../Components/ProjectSignupCard/ProjectSignupCard';

class StudentSignup extends Component {

    state = {
        signedStudents: [],
        filterValue: '',
        selectedSemester: '',
        projectSemester: '',
        name: '',
        email: '',
        signupProjectView: false,
        isValidated: {
            filterValue: 'initial',
            selectedSemester: 'initial',
            projectSemester: 'initial',
            name: 'initial',
            email: 'initial'
        },
        isLoading: false
    }

    componentDidMount() {
        this.getProjects();
    };

    getProjects = () => {
        let newState = [];
        firebase.getRegisteredStudentProjects().then(r => {
            r.forEach(doc => {
                newState.push({ id: doc.id, data: doc.data() })
            })
            this.setState({ signedStudents: newState })
        });
    }

    addProject = () => {
        const { filterValue, selectedSemester, projectSemester, name, email } = this.state;

        this.setState({ isLoading: true });

        const payload = {
            students: [{
                name: name,
                email: email
            }],
            projectName: filterValue,
            currentStudentSemester: selectedSemester.value,
            projectSemester: projectSemester.value,
            submitTime: parseInt((new Date().getTime() / 1000).toFixed(0))
        }

        firebase.registerStudentProject(payload);

        setTimeout(
            () => {
                this.myFormRef.reset();
                this.setState({
                    isLoading: false,
                    isValidated: {
                        filterValue: 'initial',
                        selectedSemester: 'initial',
                        projectSemester: 'initial',
                        name: 'initial',
                        email: 'initial'
                    },
                    signupProjectView: false,
                    // selectedSemester: {},
                    projectSemester: '',
                    filterValue: ''
                });
                this.getProjects();
            },
            1500
        )
    }

    updateProject = () => firebase.addStudentToProject(
        {
            name: 'Lukas Bjørn Leer Bysted',
            email: 'lbyste15@student.aau.dk'
        },
        this.id
    );

    applyFilter = project => {
        const { filterValue, selectedSemester } = this.state;
        if(!project.data.projectName) return;
        return (selectedSemester.value === project.data.currentStudentSemester) &&
            project.data.projectName.toLowerCase().includes(filterValue.toLowerCase())
    }

    getValidationClass = step => {
        switch (step) {
            case 'initial':
                return '';
            case 'valid':
                return ' input-valid';
            case 'invalid':
                return ' input-invalid';
            default:
                return '';
        }
    }

    validateFields = (name, value) => {
        const { isValidated } = this.state;

        if (name === 'email') {
            isValidated[name] = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? 'valid' : 'invalid'; //this.companyInput.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'validated' : 'invalid';
            this.setState({ isValidated: isValidated })
        } else {
            isValidated[name] = value.toString().length > 0 ? 'valid' : 'invalid';
        }
    }

    getSemesters = () => {
        const { selectedSemester } = this.state;

        const semesters = [
            { value: '1', label: '1st semester' },
            { value: '2', label: '2nd semester' },
            { value: '3', label: '3rd semester' },
            { value: '4', label: '4th semester' },
            { value: '5', label: '5th semester' },
            { value: '6', label: '6th semester' },
            { value: '7', label: '7th semester' },
            { value: '8', label: '8th semester' },
            { value: '9', label: '9th semester' },
            { value: '10', label: '10th semester' },
        ];

        return semesters.slice(0, parseInt(selectedSemester.value)).reverse();
    }

    enrollStudent = (id, title) => this.props.changeStudentModalVisibility(true, id, title, this.getProjects);

    render() {
        const { signedStudents, selectedSemester, signupProjectView, isLoading, isValidated, projectSemester, filterValue } = this.state;
        const filteredStudents = signedStudents.filter(s => this.applyFilter(s))

        return (
            <form ref={(el) => this.myFormRef = el}>
                <Row justify='center' id="student-signup-section">

                    <Col xs={12}>
                        <H2>{signupProjectView ? 'Sign it up!' : 'Find your project'}</H2>
                    </Col>
                    <Col xs={0} sm={0} md={signupProjectView ? 4 : 3} />
                    <Col xs={12} md={signupProjectView ? 4 : 3}>
                        <Select className='select-input' value={selectedSemester} placeholder='Year started' onChange={e => { this.setState({ selectedSemester: e }); this.validateFields('selectedSemester', e.value) }}
                            options={[
                                { value: '10', label: '2014' },
                                { value: '8', label: '2015' },
                                { value: '6', label: '2016' },
                                { value: '4', label: '2017' },
                            ]}
                        />
                    </Col>
                    {signupProjectView &&
                        <>
                            <Col xs={0} sm={0} md={signupProjectView ? 4 : 0} />
                            <Col xs={0} sm={0} md={signupProjectView ? 4 : 0} />
                        </>
                    }
                    <Col xs={12} md={signupProjectView ? 4 : 3}>
                        {signupProjectView && <div style={{ marginTop: '16px' }} />}
                        <input defaultValue={filterValue} className={'input' + this.getValidationClass(isValidated.filterValue) + ' project-signup-input'} placeholder='Project title' onInput={e => { this.setState({ filterValue: e.target.value }); this.validateFields('filterValue', e.target.value) }} />
                    </Col>
                    <Col xs={0} sm={0} md={signupProjectView ? 4 : 3} />
                    {!signupProjectView ?
                        <Col xs={12} md={6}>
                            {selectedSemester.value ?
                                <div>
                                    {filteredStudents.length ?
                                        <div className='project-list-wrapper'>
                                            {filteredStudents.map((s, i) =>
                                                <ProjectSignupCard key={s.id} z={i} enrollStudent={this.enrollStudent} title={s.data.projectName} students={s.data.students} projectId={s.id} />
                                            )}
                                            <div style={{ textAlign: 'center' }}>
                                                <Button onClick={() => this.setState({ signupProjectView: true })}>
                                                    Sign up your project!
                                                </Button>
                                            </div>
                                        </div>
                                        :
                                        <div style={{ textAlign: 'center', paddingLeft: '88px', paddingRight: '88px', paddingTop: '32px' }}>
                                            <img style={{ width: '100%' }} src={require('../../Images/marginalia-delete-confirmation.svg')} alt='' />
                                            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                                                <p>This project doesn’t seem to be signed up.</p>
                                                <div style={{marginBottom: '32px'}} />
                                                <Button onClick={() => this.setState({ signupProjectView: true })}>
                                                    Sign up your project!
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                <div style={{ textAlign: 'center', paddingLeft: '80px', paddingRight: '80px', paddingTop: '32px' }}>
                                    <img style={{ width: '100%' }} src={require('../../Images/marginalia-navigation-support.svg')} alt='' />
                                </div>
                            }
                        </Col>
                        :
                        <>
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={12} md={4}>
                                <Select className='select-input' placeholder='Project Semester' value={projectSemester} onChange={e => { this.setState({ projectSemester: e }); this.validateFields('projectSemester', e.value) }}
                                    options={this.getSemesters()}
                                />
                            </Col>
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={12} md={4}>
                                {signupProjectView && <div style={{ marginTop: '16px' }} />}
                                <input className={'input' + this.getValidationClass(isValidated.name)} placeholder='Name' onInput={e => { this.setState({ name: e.target.value }); this.validateFields('name', e.target.value) }} />
                            </Col>
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={12} md={4}>
                                {signupProjectView && <div style={{ marginTop: '16px' }} />}
                                <input className={'input' + this.getValidationClass(isValidated.email)} placeholder='Email' onInput={e => { this.setState({ email: e.target.value }); this.validateFields('email', e.target.value) }} />
                            </Col>
                            <Col xs={0} sm={0} md={4} />
                            <Col xs={12} sm={12} md={4}>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        className='submit-button'
                                        disabled={!(Object.keys(isValidated).every(k => isValidated[k] === 'valid'))}
                                        onClick={e => { e.preventDefault(); this.addProject() }}
                                    >
                                        {isLoading ? <img style={{ height: '48px', marginTop: '-16px' }} src={require('../../Images/Loading.svg')} alt='' /> : 'Sign up your project!'}
                                    </button>
                                </div>
                            </Col>
                        </>
                    }
                </Row>
            </form>
        );
    }
};

export default StudentSignup;