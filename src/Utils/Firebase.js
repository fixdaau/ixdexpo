import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../Config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  // GET-methods
  getRegisteredCompanies = () => this.db.collection('registeredCompanies').get();

  getInterestedCompanies = () => this.db.collection('interestedCompanies').get();

  getRegisteredStudentProjects = () => this.db.collection('studentProjects').get();
  

  // ADD-methods
  registerCompany = payload => this.db.collection('registeredCompanies').add(payload);

  addInterestedCompany = payload => this.db.collection('interestedCompanies').add(payload);

  registerStudentProject = payload => this.db.collection('studentProjects').add(payload);

  // Needs test for updates -> better method maybe
  addStudentToProject = (payload, projectId) => this.db.collection('studentProjects').doc(projectId).add(payload);
}

export const firebase = new Firebase()