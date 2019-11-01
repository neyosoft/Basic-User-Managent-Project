import firebase from 'firebase/app';
import 'firebase/database';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
