import React, { Component } from 'react';
import { firebase } from '../../Utils/Firebase';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import Select from 'react-select';
import H1 from '../../Components/H1/H1';
import Button from '../../Components/Button/Button';
import ProjectSignupCard from '../../Components/ProjectSignupCard/ProjectSignupCard';
import './StudentSignup.scss';

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
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    let newState = [];

    firebase.getRegisteredStudentProjects().then(r => {
      r.forEach(doc => {
        newState.push({ id: doc.id, data: doc.data() });
      });
      this.setState({ signedStudents: newState });
    });
  };

  addProject = () => {
    const { filterValue, selectedSemester, projectSemester, name, email } = this.state;

    this.setState({ isLoading: true });

    const payload = {
      students: [
        {
          name: name,
          email: email
        }
      ],
      projectName: filterValue,
      currentStudentSemester: selectedSemester.value,
      projectSemester: projectSemester.value,
      submitTime: parseInt((new Date().getTime() / 1000).toFixed(0))
    };

    // firebase.registerStudentProject(payload);

    setTimeout(() => {
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
    }, 1500);
  };

  applyFilter = project => {
    const { filterValue, selectedSemester } = this.state;

    if (!project.data.projectName) return;
    return (
      selectedSemester.value === project.data.currentStudentSemester &&
      project.data.projectName.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

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
  };

  validateFields = (name, value) => {
    const { isValidated } = this.state;

    if (name === 'email') {
      isValidated[
        name
      ] = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
        ? 'valid'
        : 'invalid'; //this.companyInput.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'validated' : 'invalid';
      this.setState({ isValidated: isValidated });
    } else {
      isValidated[name] = value.toString().length > 0 ? 'valid' : 'invalid';
    }
  };

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
      { value: '10', label: '10th semester' }
    ];

    return semesters.slice(0, parseInt(selectedSemester.value)).reverse();
  };

  enrollStudent = (id, title) => this.props.changeStudentModalVisibility(true, id, title, this.getProjects);

  render() {
    const {
      signedStudents,
      selectedSemester,
      signupProjectView,
      isLoading,
      isValidated,
      projectSemester,
      filterValue
    } = this.state;

    const filteredStudents = signedStudents.filter(s => this.applyFilter(s));

    const selectSemesterInput = (
      <>
        {signupProjectView ? <p className="input-label">YEAR OF SEMESTER</p> : null}
        <Select
          className="select-input"
          value={selectedSemester}
          placeholder="Year started"
          onChange={e => {
            this.setState({ selectedSemester: e });
            this.validateFields('selectedSemester', e.value);
          }}
          options={[
            { value: '10', label: '2015' },
            { value: '8', label: '2016' },
            { value: '6', label: '2017' }
          ]}
        />
      </>
    );

    const projectTitleInput = (
      <>
        {signupProjectView ? <p className="input-label">PROJECT TITLE</p> : null}
        <input
          defaultValue={filterValue}
          className={'input' + this.getValidationClass(isValidated.filterValue) + ' project-signup-input'}
          placeholder="Project title"
          onInput={e => {
            this.setState({ filterValue: e.target.value });
            this.validateFields('filterValue', e.target.value);
          }}
        />
      </>
    );

    const projectSemesterInput = (
      <>
        {signupProjectView && <div style={{ marginTop: '16px' }} />}
        <p className="input-label">PROJECT SEMESTER</p>
        <Select
          className="select-input"
          placeholder="Project Semester"
          value={projectSemester}
          onChange={e => {
            this.setState({ projectSemester: e });
            this.validateFields('projectSemester', e.value);
          }}
          options={this.getSemesters()}
        />
      </>
    );

    const nameInput = (
      <>
        {signupProjectView && <div style={{ marginTop: '16px' }} />}
        <p className="input-label">YOUR NAME</p>
        <input
          className={'input' + this.getValidationClass(isValidated.name)}
          placeholder="Name"
          onInput={e => {
            this.setState({ name: e.target.value });
            this.validateFields('name', e.target.value);
          }}
        />
      </>
    );

    const mailInput = (
      <>
        {signupProjectView && <div style={{ marginTop: '16px' }} />}
        <p className="input-label">YOUR STUDENT EMAIL</p>
        <input
          className={'input' + this.getValidationClass(isValidated.email)}
          placeholder="Email"
          onInput={e => {
            this.setState({ email: e.target.value });
            this.validateFields('email', e.target.value);
          }}
        />
      </>
    );

    return (
      <form ref={el => (this.myFormRef = el)}>
        <div className="signup-container signup-bg">
          <Container>
            <Row justify="center" align="center" id="student-signup-section">
              <Col md={12} lg={6}>
                <div className="signup-header">
                  <H1 className="signup-title">Are you in?</H1>
                  <Hidden xs={true} sm={true} md={true}>
                    <p>
                      Filter through all projects to find yours. If it has not yet been registered, you can sign it up
                      right away.
                    </p>
                  </Hidden>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <Row>
                  <Col md={12} lg={6}>
                    {selectSemesterInput}
                  </Col>
                  <Col md={12} lg={6}>
                    {projectTitleInput}
                  </Col>
                  <Col md={12} lg={12} className="remove-padding">
                    {!signupProjectView ? (
                      <Col xs={12} lg={12} className="remove-padding-right">
                        {selectedSemester.value ? (
                          <>
                            {filteredStudents.length ? (
                              <div className="project-list-wrapper">
                                {filteredStudents.map((s, i) => (
                                  <ProjectSignupCard
                                    key={s.id}
                                    z={i}
                                    enrollStudent={this.enrollStudent}
                                    title={s.data.projectName}
                                    students={s.data.students}
                                    projectId={s.id}
                                  />
                                ))}
                                <div style={{ textAlign: 'center' }}>
                                  <Button onClick={() => this.setState({ signupProjectView: true })} type="primary">
                                    Sign up your project!
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                                <p>Whoops... your project is not signed up yet.</p>
                                <Button onClick={() => this.setState({ signupProjectView: true })} type="primary">
                                  Sign up your project!
                                </Button>
                              </div>
                            )}
                          </>
                        ) : null}
                      </Col>
                    ) : (
                      <>
                        <Col xs={12} lg={6}>
                          {projectSemesterInput}
                        </Col>
                        <Col xs={12} lg={12}>
                          {nameInput}
                        </Col>
                        <Col xs={12} lg={12}>
                          {mailInput}
                        </Col>
                        <Col xs={12} sm={12} lg={6}>
                          <div className="submit-project-button">
                            <Button
                              disabled={!Object.keys(isValidated).every(k => isValidated[k] === 'valid')}
                              onClick={e => {
                                e.preventDefault();
                                this.addProject();
                              }}
                              type="primary"
                            >
                              {isLoading ? (
                                <img
                                  style={{ height: '48px', marginTop: '-16px' }}
                                  src={require('../../Images/Loading.svg')}
                                  alt=""
                                />
                              ) : (
                                'Finish signup'
                              )}
                            </Button>
                          </div>
                        </Col>
                      </>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    );
  }
}

export default StudentSignup;
