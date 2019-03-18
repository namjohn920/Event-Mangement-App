import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF9pE4twM4sX3d_h5vcrZY1W6jSHFD50g",
    authDomain: "revents-e616e.firebaseapp.com",
    databaseURL: "https://revents-e616e.firebaseio.com",
    projectId: "revents-e616e",
    storageBucket: "revents-e616e.appspot.com",
    messagingSenderId: "399934266976"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
