import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Main from '../Pages/Main';
import CompanySignup from '../Pages/CompanySignup';
import Student from '../Pages/Student';
import PopupModal from '../Components/PopupModal/PopupModal';
import FirebaseReadOut from '../Pages/FirebaseReadout';

class App extends Component {
  state = {
    showModal: false  
  }

  changeModalVisibility = showModal => this.setState({ showModal: showModal });

  render() {
    const { showModal } = this.state;

    return (
      <div id='modal-container'>
        <div id='app' className={showModal ? 'add-blur' : ''}>
          <Route exact={true} path='/' component={Main} />
          <Route exact={true} path='/company-signup' render={() =>
            <CompanySignup changeModalVisibility={this.changeModalVisibility} />
          } />
          <Route exact={true} path='/asjnanj1oijas0912kjd0asd901njf09ds12' component={FirebaseReadOut} />
          <Route exact path='/student' component={Student} />
        </div>
        {this.state.showModal && <PopupModal changeModalVisibility={this.changeModalVisibility} />}
      </div>
    );
  }
}

export default App;
