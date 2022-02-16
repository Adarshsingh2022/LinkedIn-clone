import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAcJBNko0Yal7kRtrZpHJGEZ_ZC6RQatY8",
    authDomain: "linkedin-clone-f32a9.firebaseapp.com",
    projectId: "linkedin-clone-f32a9",
    storageBucket: "linkedin-clone-f32a9.appspot.com",
    messagingSenderId: "1001409145543",
    appId: "1:1001409145543:web:6e1cbe3e264902a5fdece2"
  };

  //this special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();


  export default {db, auth} 