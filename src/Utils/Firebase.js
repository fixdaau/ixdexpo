import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../Config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  //https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/channel?database=projects%2Fbrokroev-f7345%2Fdatabases%2F(default)&VER=8&gsessionid=6V6c0FiRSfFudK23z2UBxgg2PAjXUvKi&SID=GY_ySR-5h13MpN8lA_2t9Q&RID=71250&AID=1&zx=xn3gjs9qr5uz&t=1

  // GET-methods
  getRegisteredCompanies = () => this.db.collection('registeredCompanies').get();

  getInterestedCompanies = () => this.db.collection('interestedCompanies').get();

  getRegisteredStudentProjects = () => this.db.collection('studentProjects').get();


  // ADD-methods
  registerCompany = payload => this.db.collection('registeredCompanies').add(payload);

  addInterestedCompany = payload => this.db.collection('interestedCompanies').add(payload);

  registerStudentProject = payload => this.db.collection('studentProjects20').add(payload);

  // Needs test for updates -> better method maybe
  addStudentToProject = (payload, projectId) => this.db.collection('studentProjects20').doc(projectId).update(
    {
      students: app.firestore.FieldValue.arrayUnion(payload)
    }
  );
}

export const firebase = new Firebase()