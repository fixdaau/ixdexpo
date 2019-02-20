import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../Config/firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  // Add API methods below
}

export default Firebase;