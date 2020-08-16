import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuiCNp2Dd1CoxyAiT4D5OWfTJN6PE0jj8",
    authDomain: "react-playground-project-d15b6.firebaseapp.com",
    databaseURL: "https://react-playground-project-d15b6.firebaseio.com",
    projectId: "react-playground-project-d15b6",
    storageBucket: "react-playground-project-d15b6.appspot.com",
    messagingSenderId: "345446035724",
    appId: "1:345446035724:web:ae6d1c30aebe6640075929",
    measurementId: "G-GXN03MT18E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GithubAuthProvider();
  export {auth, provider}
  export default db
  