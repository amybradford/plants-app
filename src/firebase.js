import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCnUBJ9O1xPuJEG48yVDAf9ksXhuBhy73o",
  authDomain: "plants-app-1315c.firebaseapp.com",
  projectId: "plants-app-1315c",
  storageBucket: "plants-app-1315c.appspot.com",
  messagingSenderId: "830237092534",
  appId: "1:830237092534:web:a7151b3c23bfd44f8e1417"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;
