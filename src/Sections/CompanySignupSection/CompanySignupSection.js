import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
// import InputMask from 'react-input-mask';
import H1 from '../../Components/H1/H1';
import './CompanySignupSection.scss';
import { firebase } from '../../Utils/Firebase';
import { getSellingPoints } from '../../data';
import H2 from '../../Components/H2/H2';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

class CompanySignupSection extends Component {
  componentDidMount() {
    this.companyInput.focus();
  }

  sellingPoints = getSellingPoints();

  state = {
    payload: {
      companyName: '',
      cvr: '',
      attendees: {
        attendeeOne: {
          name: '',
          email: ''
        },
        attendeeTwo: {
          name: '',
          email: ''
        },
        attendeeThree: {
          name: '',
          email: ''
        }
      }
    },
    isValidated: {
      companyName: 'initial',
      // cvr: 'initial',
      numberOfAttendees: 'valid',
      name: 'initial',
      email: 'initial'
    },
    checked: false,
    isLoading: false,
    attendees: '2'
  };

  validateFields = (name, value) => {
    const { isValidated } = this.state;

    if (name === 'email') {
      isValidated[
        name
      ] = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
        ? 'valid'
        : 'invalid'; //this.companyInput.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'validated' : 'invalid';
      this.setState({ isValidated: isValidated });
    } else {
      isValidated[name] = value.toString().length > 0 ? 'valid' : 'invalid';
    }
  };

  addToFireBase = () => {
    const { payload, checked, attendees } = this.state;

    this.setState({ isLoading: true });

    payload.submitTime = parseInt((new Date().getTime() / 1000).toFixed(0));
    payload.conditionsAccepted = checked;
    payload.numberOfAttendees = attendees;

    firebase.registerCompany(this.state.payload);

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isValidated: {
          companyName: 'initial',
          // cvr: 'initial',
          numberOfAttendees: 'valid',
          name: 'initial',
          email: 'initial'
        }
      });
      this.myFormRef.reset();
      this.props.changeModalVisibility(true);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 1500);
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

  // Refactor to functional setstate
  updateMainPayload = (fieldId, value) => {
    const newState = this.state;
    newState.payload[fieldId] = value;
    this.setState({ payload: newState.payload });
  };

  // Refactor to functional setstate
  updateAttendeePayload = (attendee, fieldId, value) => {
    const newState = this.state;
    newState.payload.attendees[attendee][fieldId] = value;
    this.setState({ payload: newState.payload });
  };

  render() {
    const { isValidated, checked, isLoading, attendees } = this.state;

    return (
      <Row>
        <Col xs={12} sm={12} md={6}>
          <H1>Registration!</H1>
          <div className="card">
            {this.sellingPoints.map((sp, i) => (
              <Row className="spacing" key={i}>
                <Col xs={1} sm={1} className="parent">
                  <img
                    className="icon"
                    src={require(`../../Images/${sp.iconSrc}`)}
                    alt=""
                  />
                </Col>
                <Col xs={10} sm={10} md={10} lg={11}>
                  <div className="cell">{sp.text}</div>
                </Col>
              </Row>
            ))}
            <div className="line" />
            <div className="fee-text">Company registration fee</div>
            <div className="currency-text">DKK</div>
            <div className="price-text">500</div>
          </div>
        </Col>
        <Col md={1} />
        <Col xs={12} sm={12} md={5} className="parent">
          <H2 alignment="left">Reserve your spot today!</H2>
          <div className="info-text">
            Don't worry if you are not sure how many you will attend, you can
            always update your attendance by writing to us!
          </div>
          <form ref={el => (this.myFormRef = el)}>
            <input
              ref={r => {
                this.companyInput = r;
              }}
              className={
                'input' + this.getValidationClass(isValidated.companyName)
              }
              placeholder="Company"
              onInput={i => {
                this.updateMainPayload('companyName', i.target.value);
                this.validateFields('companyName', i.target.value);
              }}
            />
            {/* <input className={'input' + this.getValidationClass(isValidated.cvr)} placeholder='CVR-number' onInput={i => { this.updateMainPayload('cvr', i.target.value); this.validateFields('cvr', i.target.value) }} /> */}
            {/* <InputMask className={'input' + this.getValidationClass(isValidated.numberOfAttendees)} placeholder='Number of attendees (1-3)' onInput={i => { this.updateMainPayload('numberOfAttendees', i.target.value[0]); this.validateFields('numberOfAttendees', i.target.value) }} mask="3" maskChar='' formatChars={{ '3': '[1-3]' }} /> */}

            <div className="label">How many will be attending?</div>
            <label
              className={
                'radio-container' +
                (attendees === '1' ? ' radio-container-active' : '')
              }
            >
              1
              <input
                type="radio"
                name="attendees"
                value="1"
                checked={attendees === '1'}
                onChange={e => {
                  this.setState({ attendees: e.target.value });
                  this.validateFields('numberOfAttendees', e.target.value);
                }}
              />
              <span className="radio-checkmark" />
            </label>
            <label
              className={
                'radio-container' +
                (attendees === '2' ? ' radio-container-active' : '')
              }
            >
              2
              <input
                type="radio"
                name="attendees"
                value="2"
                checked={attendees === '2'}
                onChange={e => {
                  this.setState({ attendees: e.target.value });
                  this.validateFields('numberOfAttendees', e.target.value);
                }}
              />
              <span className="radio-checkmark" />
            </label>
            <label
              className={
                'radio-container' +
                (attendees === '3' ? ' radio-container-active' : '')
              }
            >
              3
              <input
                type="radio"
                name="attendees"
                value="3"
                checked={attendees === '3'}
                onChange={e => {
                  this.setState({ attendees: e.target.value });
                  this.validateFields('numberOfAttendees', e.target.value);
                }}
              />
              <span className="radio-checkmark" />
            </label>

            <div className="label">About you</div>
            <input
              className={'input' + this.getValidationClass(isValidated.name)}
              placeholder="Name"
              onInput={i => {
                this.updateAttendeePayload(
                  'attendeeOne',
                  'name',
                  i.target.value
                );
                this.validateFields('name', i.target.value);
              }}
            />
            <input
              className={'input' + this.getValidationClass(isValidated.email)}
              placeholder="Email"
              onInput={i => {
                this.updateAttendeePayload(
                  'attendeeOne',
                  'email',
                  i.target.value
                );
                this.validateFields('email', i.target.value);
              }}
            />
            <Row>
              <Col xs={1}>
                <label className="container">
                  <input
                    type="checkbox"
                    onChange={e => this.setState({ checked: e.target.checked })}
                  />
                  <span className="checkmark" />
                </label>
              </Col>
              <Col xs={11}>
                <span className="license-text">
                  Check here to indicate that you accept paying the registration
                  fee, which is non-refundable.
                </span>
              </Col>
            </Row>
            <button
              className="submit-button"
              disabled={
                !(
                  Object.keys(isValidated).every(
                    k => isValidated[k] === 'valid'
                  ) && checked
                )
              }
              onClick={e => {
                e.preventDefault();
                this.addToFireBase();
              }}
            >
              {isLoading ? <LoadingIcon /> : 'Register for IXD EXPO'}
            </button>
          </form>
        </Col>
      </Row>
    );
  }
}

export default CompanySignupSection;
