import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Main from "../Pages/Main";
import CompanySignup from "../Pages/CompanySignup";
import Student from "../Pages/Student";
import PopupModal from "../Components/PopupModal/PopupModal";
import FirebaseReadOut from "../Pages/FirebaseReadout";
import StudentPopupModal from "../Components/StudentPopupModal/StudentPopupModal";

class App extends Component {
  state = {
    showModal: false,
    showStudentModal: false,
    title: "",
    id: "",
    getProjects: () => {}
  };

  changeModalVisibility = showModal => this.setState({ showModal: showModal });

  changeStudentModalVisibility = (showModal, id, title, getProjects) =>
    this.setState({
      showStudentModal: showModal,
      title: title,
      id: id,
      getProjects: getProjects
    });

  render() {
    const { showModal, showStudentModal, title, id, getProjects } = this.state;

    return (
      <>
        <div id="modal-container">
          <div
            id="app"
            //className={showModal || showStudentModal ? "add-blur" : ""}
          >
            <Route exact={true} path="/" component={Main} />
            {/* <Route exact={true} path='/company-signup' render={() =>
            <CompanySignup changeModalVisibility={this.changeModalVisibility} />
          } /> */}
            {/* <Route exact={true} path='/asjnanj1oijas0912kjd0asd901njf09ds12' component={FirebaseReadOut} /> */}
            <Route
              exact
              path="/student"
              render={() => (
                <Student
                  changeStudentModalVisibility={
                    this.changeStudentModalVisibility
                  }
                />
              )}
            />
          </div>
          {showModal && (
            <PopupModal changeModalVisibility={this.changeModalVisibility} />
          )}
          {showStudentModal && (
            <StudentPopupModal
              projectTitle={title}
              projectId={id}
              changeStudentModalVisibility={this.changeStudentModalVisibility}
              getProjects={getProjects}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
