import React, { Component } from 'react';
import './InterestedCompanySection.scss';
import { Row, Col, Visible } from 'react-grid-system';
import H2 from '../../Components/H2/H2';
import { firebase } from '../../Utils/Firebase';

class InterestedCompanySection extends Component {
    state = {
        payload: {
            companyName: '',
            name: '',
            email: '',
        },
        isValidated: {
            companyName: 'initial',
            name: 'initial',
            email: 'initial'
        },
        isLoading: false,
        isSubmitted: false,
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

    addToFireBase = () => {
        const { payload, checked } = this.state;

        this.setState({ isLoading: true });

        payload.submitTime = parseInt((new Date().getTime() / 1000).toFixed(0));

        firebase.addInterestedCompany(payload);

        setTimeout(
            () => {
                this.setState({
                    isLoading: false,
                    isValidated: {
                        companyName: 'initial',
                        name: 'initial',
                        email: 'initial'
                    },
                    isSubmitted: true
                });
                this.myFormRef.reset();
            },
            1500
        );

        setTimeout(
            () =>
                this.setState({ isSubmitted: false }),
            6500
        )

    }

    render() {
        const { isValidated, isLoading, isSubmitted } = this.state;
        return (
            <Row id='interested-section'>
                <Col xs={12} sm={12} md={5}>
                    <H2 alignment='left'>Sign up for invitations today!</H2>
                    <form ref={(el) => this.myFormRef = el}>
                        <input className={'input' + this.getValidationClass(isValidated.companyName)} placeholder='Company' onInput={i => { this.updateMainPayload('companyName', i.target.value); this.validateFields('companyName', i.target.value) }} />
                        <input className={'input' + this.getValidationClass(isValidated.name)} placeholder='Name' onInput={i => { this.updateMainPayload('name', i.target.value); this.validateFields('name', i.target.value) }} />
                        <input className={'input' + this.getValidationClass(isValidated.email)} placeholder='Email' onInput={i => { this.updateMainPayload('email', i.target.value); this.validateFields('email', i.target.value) }} />
                        {isSubmitted && <div className='info-text' style={{ textAlign: 'center', marginTop: '32px' }}>Thank you for your interest, we will get in touch with an invitation!</div>}
                        <button
                            className='submit-button'
                            disabled={!Object.keys(isValidated).every(k => isValidated[k] === 'valid')}
                            onClick={e => { e.preventDefault(); this.addToFireBase() }}
                        >
                            {isLoading ? <img style={{ height: '48px', marginTop: '-16px' }} src={require('../../Images/Loading.svg')} alt='' /> : 'I’d like to sign up!'}
                        </button>
                    </form>
                </Col>
                <Col md={1} />
                <Visible xs={false} sm={false} md={false} lg={true} xl={true}>
                    <Col md={6}>
                        <img src={require('../../Images/marginalia-success.svg')} />
                    </Col>
                </Visible>
            </Row>
        );
    }
}

export default InterestedCompanySection;