import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGn5-qf8v8Xa46kJQKRDj_W7X_PyW7l4o",
    authDomain: "slack-clone-2a76f.firebaseapp.com",
    projectId: "slack-clone-2a76f",
    storageBucket: "slack-clone-2a76f.appspot.com",
    messagingSenderId: "987540770531",
    appId: "1:987540770531:web:288027f6ddd8a8a421bfd6"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
