import React, { Component } from "react";
import { Container, Row, Col, Hidden } from "react-grid-system";
import H1 from "../H1/H1";
import "./StudentPopupModal.scss";
import { firebase } from "../../Utils/Firebase";

class StudentPopupModal extends Component {
  state = {
    name: "",
    email: "",
    isValidated: {
      name: "initial",
      email: "initial"
    },
    isLoading: false
  };

  getValidationClass = step => {
    switch (step) {
      case "initial":
        return "";
      case "valid":
        return " input-valid";
      case "invalid":
        return " input-invalid";
      default:
        return "";
    }
  };

  validateFields = (name, value) => {
    const { isValidated } = this.state;

    if (name === "email") {
      isValidated[
        name
      ] = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
        ? "valid"
        : "invalid"; //this.companyInput.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'validated' : 'invalid';
      this.setState({ isValidated: isValidated });
    } else {
      isValidated[name] = value.toString().length > 0 ? "valid" : "invalid";
    }
  };

  handleSubmit = e => {
    const { projectId, changeStudentModalVisibility, getProjects } = this.props;

    e.preventDefault();
    this.setState({ isLoading: true });
    firebase.addStudentToProject(
      {
        name: this.state.name,
        email: this.state.email
      },
      projectId
    );

    setTimeout(() => {
      getProjects();
      changeStudentModalVisibility(false);
      this.setState({ isLoading: false });
    }, 1500);
  };

  render() {
    const { isValidated, isLoading } = this.state;
    const { projectTitle, changeStudentModalVisibility } = this.props;

    return (
      <div className="modal-wrapper">
        <Container>
          <Row className="modal" justify="center">
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                cursor: "pointer"
              }}
              onClick={() => changeStudentModalVisibility(false)}
            >
              x
            </div>

            <Col xs={12} sm={12} md={8}>
              <div className="project-section-heading">
                We’re glad you want to participate
              </div>
              <div className="sub-text">
                Thanks for enrolling. We just need a little information about
                you to keep track of all the projects.
              </div>
              <div className="project-enrollment-information">
                Enroll on project: {projectTitle}
              </div>
              <Row style={{ marginTop: "40px" }}>
                <Col>
                  <Col xs={12}>
                    <input
                      className={
                        "input" + this.getValidationClass(isValidated.name)
                      }
                      placeholder="Name"
                      onInput={e => {
                        this.setState({ name: e.target.value });
                        this.validateFields("name", e.target.value);
                      }}
                    />
                    <input
                      className={
                        "input" + this.getValidationClass(isValidated.name)
                      }
                      placeholder="Email"
                      onInput={e => {
                        this.setState({ email: e.target.value });
                        this.validateFields("email", e.target.value);
                      }}
                      style={{ marginTop: "16px" }}
                    />
                  </Col>
                </Col>
              </Row>
              <div style={{ textAlign: "center" }}>
                <button
                  className="submit-button-student"
                  disabled={
                    !Object.keys(isValidated).every(
                      k => isValidated[k] === "valid"
                    )
                  }
                  onClick={e => this.handleSubmit(e)}
                >
                  {isLoading ? (
                    <img
                      style={{ height: "48px", marginTop: "-16px" }}
                      src={require("../../Images/Loading.svg")}
                      alt=""
                    />
                  ) : (
                    "Confirm enrollment"
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StudentPopupModal;
