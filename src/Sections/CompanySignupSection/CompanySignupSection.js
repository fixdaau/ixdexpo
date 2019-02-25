import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import InputMask from 'react-input-mask';
import H1 from '../../Components/H1/H1';
import './CompanySignupSection.scss';
import { firebase } from '../../Utils/Firebase';
import { getSellingPoints } from '../../data';

class CompanySignupSection extends Component {

    sellingPoints = getSellingPoints();

    state = {
        payload: {
            companyName: '',
            cvr: '',
            numberOfAttendees: 0,
            attendees: {
                attendeeOne: {
                    name: '',
                    email: '',
                },
                attendeeTwo: {
                    name: '',
                    email: '',
                },
                attendeeThree: {
                    name: '',
                    email: '',
                },
            }
        },
        isValidated: {
            companyName: 'initial',
            cvr: 'initial',
            numberOfAttendees: 'initial',
            name: 'initial',
            email: 'initial'
        },
        checked: false,
        isLoading: false
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

    addToFireBase = () => {
        const { payload, checked } = this.state;

        this.setState({ isLoading: true });

        payload.submitTime = parseInt((new Date().getTime() / 1000).toFixed(0));
        payload.conditionsAccepted = checked

        firebase.registerCompany(this.state.payload);

        setTimeout(
            () => {
                this.setState({
                    isLoading: false,
                    isValidated: {
                        companyName: 'initial',
                        cvr: 'initial',
                        numberOfAttendees: 'initial',
                        name: 'initial',
                        email: 'initial'
                    }
                });
                this.myFormRef.reset();
            },
            1500
        )
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

    // Refactor to functional setstate
    updateMainPayload = (fieldId, value) => {
        const newState = this.state;
        newState.payload[fieldId] = value;
        this.setState({ payload: newState.payload })
    }

    // Refactor to functional setstate
    updateAttendeePayload = (attendee, fieldId, value) => {
        const newState = this.state;
        newState.payload.attendees[attendee][fieldId] = value;
        this.setState({ payload: newState.payload })
    }

    render() {
        const { isValidated, checked, isLoading } = this.state;

        return (
            <Row>
                <Col xs={12} sm={12} md={6} >
                    <H1>Registration!</H1>
                    <div className='card'>
                        {this.sellingPoints.map((sp, i) =>
                            <Row className='spacing' key={i}>
                                <Col xs={1} sm={1} className='parent'>
                                    <img className='icon' src={require(`../../Images/${sp.iconSrc}`)} alt='' />
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={11} >
                                    <div className='cell'>{sp.text}</div>
                                </Col>
                            </Row>
                        )}
                        <div className='line' />
                        <div className='fee-text'>Company regsitration fee</div>
                        <div className='currency-text'>DKK</div>
                        <div className='price-text'>500</div>
                    </div>
                </Col>
                <Col md={1} />
                <Col xs={12} sm={12} md={5} className='parent'>
                    <h2 className='h2'>Reserve your spot today!</h2>
                    {/* <div className='info-text'>Sign up below for IxD Expo, and you will receive more information soon!</div> */}
                    <form ref={(el) => this.myFormRef = el}>
                        <input className={'input' + this.getValidationClass(isValidated.companyName)} placeholder='Company' onInput={i => { this.updateMainPayload('companyName', i.target.value); this.validateFields('companyName', i.target.value) }} />
                        <input className={'input' + this.getValidationClass(isValidated.cvr)} placeholder='CVR-number' onInput={i => { this.updateMainPayload('cvr', i.target.value); this.validateFields('cvr', i.target.value) }} />
                        <InputMask className={'input' + this.getValidationClass(isValidated.numberOfAttendees)} placeholder='Number of attendees' onInput={i => { this.updateMainPayload('numberOfAttendees', i.target.value); this.validateFields('numberOfAttendees', i.target.value) }} mask="3" maskChar='' formatChars={{ '3': '[1-3]' }} />
                        <div className='label'>About you</div>
                        <input className={'input' + this.getValidationClass(isValidated.name)} placeholder='Name' onInput={i => { this.updateAttendeePayload('attendeeOne', 'name', i.target.value); this.validateFields('name', i.target.value) }} />
                        <input className={'input' + this.getValidationClass(isValidated.email)} placeholder='Email' onInput={i => { this.updateAttendeePayload('attendeeOne', 'email', i.target.value); this.validateFields('email', i.target.value) }} />
                        <Row>
                            <Col xs={1}>
                                <label className="container">
                                    <input type="checkbox" onChange={e => this.setState({ checked: e.target.checked })} />
                                    <span className="checkmark"></span>
                                </label>
                            </Col>
                            <Col xs={11}>
                                <span className='license-text'>Check here to indicate that you accept paying the registration fee, which is non-refundable.</span>
                            </Col>
                        </Row>
                        <button
                            className='button'
                            disabled={!(Object.keys(isValidated).every(k => isValidated[k] === 'valid') && checked)}
                            onClick={e => { e.preventDefault(); this.addToFireBase() }}
                        >
                            {isLoading ? <img style={{ height: '48px', marginTop: '-16px' }} src={require('../../Images/Loading.svg')} alt='' /> : 'Register for IXD EXPO'}
                        </button>
                    </form>
                </Col>
            </Row >
        );
    }
}

export default CompanySignupSection;