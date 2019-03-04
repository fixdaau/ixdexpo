import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import H2 from '../H2/H2';
import './StudentPopupModal.scss';
import { firebase } from '../../Utils/Firebase';

class StudentPopupModal extends Component {
    state = {
        name: '',
        email: '',
        isValidated: {
            name: 'initial',
            email: 'initial'
        },
        isLoading: false
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
            isValidated[name] = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? 'valid' : 'invalid'; //this.companyInput.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'validated' : 'invalid';
            this.setState({ isValidated: isValidated })
        } else {
            isValidated[name] = value.toString().length > 0 ? 'valid' : 'invalid';
        }
    }

    handleSubmit = (e) => {
        const { projectId, changeStudentModalVisibility, getProjects } = this.props;

        e.preventDefault();
        this.setState({isLoading: true})
        firebase.addStudentToProject({
            name: this.state.name,
            email: this.state.email
        }, projectId);

        setTimeout(
            () => {
                getProjects();
                changeStudentModalVisibility(false);
                this.setState({isLoading: false})
            },
            1500
        );



    }

    render() {
        const { isValidated, isLoading } = this.state;
        const { projectTitle, changeStudentModalVisibility } = this.props;

        return (
            <div className='modal-wrapper'>
                <Container>

                    <Row className='modal'>
                        <div style={{ position: "absolute", top: '24px', right: '24px', cursor: 'pointer' }} onClick={() => changeStudentModalVisibility(false)}>x</div>

                        <Hidden xs={true} sm={true} md={true}>
                            <Col xs={6}>
                                <img src={require('../../Images/Illustratoin.svg')} alt='' style={{ width: '100%' }} />
                            </Col>
                        </Hidden>

                        <Col xs={12} sm={12} md={6}>
                            <H2 alignment='left'>We’re glad you want to participate</H2>
                            <p className='sub-text'>Thanks for enrolling. We just need a little information about you to keep track of all the projects.</p>
                            <Row style={{ marginTop: '40px' }}>
                                <Col>
                                    <Col xs={12}>
                                        <input className={'input' + this.getValidationClass(isValidated.name)} placeholder='Name' onInput={e => { this.setState({ name: e.target.value }); this.validateFields('name', e.target.value) }} />
                                        <input className={'input' + this.getValidationClass(isValidated.name)} placeholder='Email' onInput={e => { this.setState({ email: e.target.value }); this.validateFields('email', e.target.value) }} />
                                        <p>Enroll on project: {projectTitle}</p>
                                    </Col>
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'center' }}>
                                <button
                                    className='submit-button'
                                    disabled={!(Object.keys(isValidated).every(k => isValidated[k] === 'valid'))}
                                    onClick={e => this.handleSubmit(e)}
                                >
                                    {isLoading ? <img style={{ height: '48px', marginTop: '-16px' }} src={require('../../Images/Loading.svg')} alt='' /> : 'Confirm enrollment'}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default StudentPopupModal;