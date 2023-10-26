// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSCo8TYBQIBg1NBvI26J7h76N5Cf6UDKU",
  authDomain: "curriculo-111e7.firebaseapp.com",
  projectId: "curriculo-111e7",
  storageBucket: "curriculo-111e7.appspot.com",
  messagingSenderId: "619429348488",
  appId: "1:619429348488:web:80d5f78ef68aa1c39bcb3d",
  measurementId: "G-EPTHP3SPHW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

export { auth };
export { firebase }